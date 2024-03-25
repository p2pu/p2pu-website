import sys, json
teams = json.load(sys.stdin)['items']

dedicated_team_page_slugs = [
    'berlin',
    'blcs',
    'cerculdeinvatare',
    'klubywiedzy',
    'koeln',
    'opintopiirit',
]

theme_colors = [
    'green',
    'yellow',
    'orange',
    'blue',
]

teams = filter(lambda t: t['page_slug'] not in dedicated_team_page_slugs, teams)

for i,d in enumerate(teams):
    if d['id'] == 3:
        continue
    filename = '_teams/{}.md'.format(d['page_slug'])
    title = d['name']
    with open(filename, 'w') as f:
        colorId = i % 4
        theme_color = theme_colors[colorId]
        f.write('---\ntitle: {}\ntheme_color: {}\n---\n'.format(title, theme_color))

