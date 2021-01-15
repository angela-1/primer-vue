#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

DOC_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/../src/docs" && pwd)

echo $DIRNAME
echo $INPUT_NAME

echo $DOC_DIR



NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME


# 输出文档模板
cat > $DOC_DIR/$INPUT_NAME.md <<EOF
---
title: '$NAME'
desc: 'Usage of $NAME component'
---

# $NAME

Simple description.

```vue demo
<template>
  <pr-button>Primer</pr-button>
</template>
```

```vue demo src="./test.vue"

```

```typescript src="./test.ts"

```


EOF