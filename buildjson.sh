#!/bin/bash
cat Dockerrun.json | jq --arg var $1 '(.Image[] | select(.=="test")) |= $var' > Dockerrun.aws.json
