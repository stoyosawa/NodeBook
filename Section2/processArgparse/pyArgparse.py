#!/usr/bin/env python
# -*- coding: utf-8 -*-
# 2019-08-15

import argparse

parser = argparse.ArgumentParser(
    # version='1.0',                          # Python にはない
    description='argparse module test',
    add_help=True                              # default: True
)

# 必須引数 (positional argument)
parser.add_argument(
    'file',
    help='File to read'
)
parser.add_argument(
    'anotherFile',
    help='Another file'
)

parser.add_argument(
    '-s', '--server',
    help="Server's listening address",
    default='127.0.0.1',
    type=str
)

# float を指定すると invalid int value と怒られる
parser.add_argument(
    '-p', '--port',
    help="Server's listening port",
    default=8080,
    type=int
)

# int も受け付けてくれる e.g., 1 = 1.0
parser.add_argument(
    '-f', '--float',
    help="floating number",
    default=3.14,
    type=float
)

# 制限付き (must be 0,1,2)
parser.add_argument(
    '--limitedInt',
#    type=int,
    type=str,
#    choices=[0, 1, 2]
#    choices=range(10)
    choices=[chr(x) for x in range(97, 123)]
)

# これはちゃんと動かない。何を入れても True になる
parser.add_argument(
    '-b', '--boolean',
    help="boolean number",
    default=False,
    type=bool
)

# Boolean を使うにはこれ。指定がなければ False になる
# 類似に store_false, store_const (const=xx と併記して使う)
parser.add_argument(
    '-B', '--Boolean',
    help='boolean',
    action='store_true'
)

# これは -vvv のように書いたときのカウント数をくれる
parser.add_argument(
    '-x', '--x_rated',
    action='count'
)

args = parser.parse_args()
print('Type: {}, {}, Args: {}'.format(type(args), type(vars(args)), args))
print('Boolean: {}'.format(args.Boolean))

# Python 3 には dict.iteritems() はない。
for k, v in vars(args).items():
    print('{}: {}'.format(k, v))
