#!/bin/bash

env | grep '^REACT_' > .env
echo run build
npx react-scripts build
