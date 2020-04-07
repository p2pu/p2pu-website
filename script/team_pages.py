import sys, json
teams = json.load(sys.stdin)['items']

dedicated_team_page_slugs = [
    'berlin',
    'blcs',
    'cerculdeinvatare',
    'klubywiedzy',
    'koeln',
    'opintopiirit',
    'sppl',
]

teams = filter(lambda t: t['page_slug'] not in dedicated_team_page_slugs, teams)

for id, name, slug in [ (d['id'], d['name'], d['page_slug']) for d in teams if d['id'] != 3]:
    filename = '_teams/{}.md'.format(slug)
    print(filename)
    with open(filename, 'w') as f:
        f.write('---\n---\n')
