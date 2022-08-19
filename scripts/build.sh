#!/bin/bash

env | grep '^REACT_' > .env
npm run build
