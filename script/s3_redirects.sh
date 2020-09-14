#!/bin/bash
set -e
export AWS_PAGER=""
for url in `ls en | grep -v index | sed 's#.md##g' | sed 's#.html##g'`
do
echo Setting up redirect from $url/index.html to /en/$url/
aws s3api put-object --output text --bucket $S3_BUCKET --key $url/index.html --website-redirect-location=/en/$url/
done

while read -r line
do
key=`echo $line | cut -f1 -d: | xargs echo`
val=`echo $line | cut -f2- -d: | xargs echo`
echo Setting up redirect from $key to $val
aws s3api put-object --output text --bucket $S3_BUCKET --key $key --website-redirect-location=$val
done < simple_redirects.txt
