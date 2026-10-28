#!/usr/bin/env python3
"""apps.json uretici (29.10.2026): oyunlarin/uygulamalarin "Diger oyunlarimiz" listesi (KontOyunCore MoreGames okur).
Kaynak: kont.js (id, tur, renk, play paketi) + Play Developer API'deki CANLI magaza girisi (14 dil baslik + kisa aciklama).
Yalniz play != null olanlar (Play'de herkese acik). Calistir: ../00-ARACLAR/play-api/.venv/bin/python apps_json.py
Sonra: siteye apps.json + img/<id>.webp gonder (kont.js?v= artirmaya gerek yok; uygulamalar dogrudan okur)."""
import json, os, re, sys
from google.oauth2 import service_account
from googleapiclient.discovery import build

HERE = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(HERE, 'kont.js'), encoding='utf-8').read()
apps = re.findall(r"\{ id: '([a-z0-9]+)', type: '(app|game)', color: '(#[0-9a-fA-F]{6})', play: (null|'[a-z0-9.]+')", src)
cr = service_account.Credentials.from_service_account_file(os.path.expanduser('~/.config/kont/play-servis.json'),
                                                         scopes=['https://www.googleapis.com/auth/androidpublisher'])
E = build('androidpublisher', 'v3', credentials=cr, cache_discovery=False).edits()

def lang(code):
    # Play dil kodu -> Android Locale.language (Endonezce hem "in" hem "id")
    base = code.split('-')[0]
    return base

out = []
for id_, typ, color, play in apps:
    if play == 'null':
        continue
    pkg = play.strip("'")
    eid = E.insert(packageName=pkg, body={}).execute(num_retries=4)['id']
    try:
        ls = E.listings().list(packageName=pkg, editId=eid).execute(num_retries=4).get('listings', [])
    finally:
        E.delete(packageName=pkg, editId=eid).execute(num_retries=4)
    title = {lang(l['language']): l['title'] for l in ls}
    short = {lang(l['language']): l['shortDescription'] for l in ls}
    out.append({'id': id_, 'pkg': pkg, 'type': typ, 'color': color, 'icon': f'img/{id_}.webp', 'title': title, 'short': short})
    print(id_, len(ls), 'dil', file=sys.stderr)
json.dump({'v': 1, 'apps': out}, open(os.path.join(HERE, 'apps.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('apps.json:', len(out), 'kayit', file=sys.stderr)
