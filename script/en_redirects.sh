#!/bin/bash
for url in `ls en | grep -v index | sed 's#.md##g' | sed 's#.html##g'`
do
echo "    $url: /en/$url/"
done

