#!/usr/bin/env bash

uppercase=`echo $1 | tr 'a-z' 'A-Z'`
capitalize=`echo $1 | tr [A-Z] [a-z] | sed -e 's/^./\U&/g; s/ ./\U&/g'`

echo "import api from '../helpers/api'
import {BaseService} from './base.service';

class ${capitalize}Service extends BaseService {}

export default new ${capitalize}Service()
" >> ./src/services/$1.service.js