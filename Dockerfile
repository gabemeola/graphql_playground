FROM centos:7
RUN yum install -y \
    gcc-c++

RUN curl --silent --location https://rpm.nodesource.com/setup_8.x | bash - \
    && yum -y install nodejs \
    && npm i -g yarn

WORKDIR /app