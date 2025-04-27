# MongoDB Basic Tutorials

This repository contains MongoDB basic tutorials with a collection of commands, queries, and operations to help beginners and learners get started with MongoDB. It covers common MongoDB tasks such as querying, inserting data, updating documents, and using operators like `$or`, `$and`, `$gt`, `$lt`, etc.

## Table of Contents

- [Introduction](#introduction)
- [Setting up MongoDB](#setting-up-mongodb)
- [Basic MongoDB Operations](#basic-mongodb-operations)
  - [Insert One Document](#insert-one-document)
  - [Insert Many Documents](#insert-many-documents)
  - [Find Documents](#find-documents)
  - [Update Documents](#update-documents)
  - [Delete Documents](#delete-documents)
- [Operators](#operators)
  - [$or](#or-operator)
  - [$and](#and-operator)
  - [$gt, $lt, $eq](#gt-lt-eq-operators)
- [Collection Operations](#collection-operations)
  - [Drop a Collection](#drop-a-collection)
- [Conclusion](#conclusion)

## Introduction

This repository is a collection of basic MongoDB operations and queries that will help you familiarize yourself with the NoSQL database system. It includes a variety of MongoDB operations for inserting, querying, updating, and deleting documents in collections.

## Setting up MongoDB

1. Install MongoDB from the official MongoDB website.
2. Start the MongoDB server using the `mongod` command.
3. Access MongoDB via the `mongo` shell to interact with your databases and collections.

## Basic MongoDB Operations

### Insert One Document
To insert a single document into a collection:
```javascript
db.inventory.insertOne({
  item: 'canvas',
  qty: 100,
  tags: ['cotton'],
  size: { h: 28, w: 35.5, uom: 'cm' }
});
