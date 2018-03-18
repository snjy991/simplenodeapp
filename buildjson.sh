#!/bin/bash
cat Dockerrun.aws.template.json | jq --arg var $1 '(.Image[] | select(.=="test")) |= $var' > Dockerrun.aws.json
