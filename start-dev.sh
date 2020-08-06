# docker build . -t primer-vue

docker run -it --rm --privileged=true \
    -v /home/doris/source/primer-vue:/data \
    -w /data -p 8080:8080 primer-vue sh
