#!/bin/bash

env | grep '^REACT_' > .env
react-scripts build
