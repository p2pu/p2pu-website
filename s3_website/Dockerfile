FROM ruby:2.3.3

RUN apt-get update -qq && \
    apt-get install --assume-yes -y \
       build-essential \
       libpq-dev \
       openjdk-7-jre-headless \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Use en_US.UTF-8 as our locale
ENV LC_CTYPE en_US.UTF-8
ENV LANG en_US.UTF-8

# Run bundle
RUN gem install s3_website && s3_website install

RUN mkdir /app
VOLUME /app
WORKDIR /app

CMD bash
