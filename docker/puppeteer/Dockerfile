FROM node:18

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg \
    && sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-khmeros fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r pptruser && useradd -rm -g pptruser -G audio,video pptruser 

#TODO gid and uid for user above

#USER pptruser

#WORKDIR /home/pptruser

#COPY puppeteer-latest.tgz puppeteer-core-latest.tgz ./
#RUN wget https://github.com/puppeteer/puppeteer/archive/refs/tags/puppeteer-v19.7.1.tar.gz \
#    && mv puppeteer-v19.7.1.tar.gz puppeteer-latest.tgz \
#    && wget https://github.com/puppeteer/puppeteer/archive/refs/tags/puppeteer-core-v19.7.1.tar.gz \
#    && mv puppeteer-core-v19.7.1.tar.gz puppeteer-core-latest.tgz

# Install puppeteer and puppeteer-core into /home/pptruser/node_modules.
#RUN npm i ./puppeteer-core-latest.tgz ./puppeteer-latest.tgz \
#    && rm ./puppeteer-core-latest.tgz ./puppeteer-latest.tgz \
#    && (node -e "require('child_process').execSync(require('puppeteer').executablePath() + ' --credits', {stdio: 'inherit'})" > THIRD_PARTY_NOTICES)

#RUN npm i puppeteer-core@19.7.1 puppeteer@19.7.1
#RUN npm i puppeteer-core@19.7.1

CMD ["google-chrome-stable"]
