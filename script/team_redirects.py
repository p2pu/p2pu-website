import sys, json
teams = json.load(sys.stdin)['items']

for id, name, slug in [ (d['id'], d['name'], d['page_slug']) for d in teams if d['id'] != 3]: 
    #print(f'  - condition:\n      key_prefix_equals: {slug}\n    redirect:\n      host_name: www.p2pu.org\n      replace_key_with: en/learning-circles/?team_id={id}&team={name}\n      http_redirect_code: 302')
    print('  - condition:\n      key_prefix_equals: {}\n    redirect:\n      host_name: www.p2pu.org\n      replace_key_with: en/learning-circles/?team_id={}&team={}\n      http_redirect_code: 302'.format(slug, id, name))
