## v1.38.2 (4 Jul 2023)

* fix(remove): loop through undefined values

## v1.38.1 (19 Apr 2023)

* fix(isHidden): position fixed always return true

## v1.38.0 (25 Feb 2023)

* feat: add stripBom
* feat(MediaQuery): support setQuery
* fix: is function ts types

## v1.37.1 (28 Jan 2023)

* fix(uncaught): worker error null

## v1.37.0 (20 Jul 2022)

* feat(container): memUsage, memLoad
* feat(cgroup): memory
* perf(md5): use crypto if possible

## v1.36.0 (18 May 2022)

* feat: add fileUrl
* fix(trigger): typescript definition
* fix(ajax): Add query parameters if they are necessary [#27](https://github.com/liriliri/licia/issues/27)

## v1.35.1 (18 Apr 2022)

* fix(container): cpuLoad return NaN

## v1.35.0 (15 Apr 2022)

* feat: add isDocker
* feat: add cgroup
* feat: add container
* fix(raf): illegal invocation

## v1.34.0 (13 Jan 2022)

* feat: add hookFn
* fix(Tracing): async api

## v1.33.0 (2 Jan 2022)

* feat: add Trace
* feat: add Tracing

## v1.32.0 (27 Nov 2021)

* feat: add FileStore
* feat: add FileBlobStore
* feat: add cacheRequire
* feat: add Readiness
* feat(evalCss): return style node

## v1.31.1 (22 Sep 2021)

* fix(HeapSnapshot): correct edge
* fix(safeSet): prototype pollution [#25](https://github.com/liriliri/licia/issues/25)
* perf(trim): [#25](https://github.com/liriliri/licia/issues/25)

## v1.31.0 (16 Sep 2021)

* feat: add HeapSnapshot
* feat: add lazyImport
* feat(naturalSort): support any type

## v1.30.0 (5 Sep 2021)

* feat: add naturalSort
* feat: add isCyclic
* feat: add Benchmark
* feat(stringifyAll): parse
* fix(highlight): error when style tag empty

## v1.29.0 (30 Mar 2021)

* feat: add ResizeSensor
* feat: add cssPriority
* feat: add SingleEmitter
* fix(cliHelp): no miniprogram env
* fix(Emitter): mixin removeAllListeners missing

## v1.28.0 (6 Jan 2021)

* feat: add isDir
* feat($insert): dom element
* feat(highlight): add class
* fix(waitUntil): dynamic error message

## v1.27.1 (3 Nov 2020)

* fix: Security Fix for Prototype Pollution [#22](https://github.com/liriliri/licia/issues/22)
* fix(ucs2): encode Maximum call stack size exceeded

## v1.27.0 (12 Oct 2020)

* fix(Emitter): error if off is called in listener
* feat: add wordWrap
* feat: add cliHelp

## v1.26.0 (28 Sep 2020)

* feat: add sameOrigin
* feat(stackTrace): add browser env

## v1.25.0 (31 Aug 2020)

* feat: add Trie
* feat: add morphDom

## v1.24.0 (9 Aug 2020)

* feat: add mergeArr
* feat: add isFullWidth
* feat: add strWidth
* feat: add table

## v1.23.1 (5 Jul 2020)

* fix(Emitter): delete wrong listener when calling off

## v1.23.0 (18 Jun 2020)

* feat: add shebang
* feat: add pipe
* feat: add strTpl
* feat: add I18n
* feat: add replaceAll

## v1.22.0 (5 Jun 2020)

* feat: add Socket
* feat: add isRunning
* feat(Emitter): removeAllListeners

## v1.21.2 (2 May 2020)

* fix(parseHtml): empty attribute receives undefined
* fix(Class): unsafe-eval CSP violation

## v1.21.1 (30 Apr 2020)

* fix(Emitter): ts definition
* fix($): css ts definition

## v1.21.0 (6 Apr 2020)

* add: Wrr
* test: increase test coverage to over 95%

## v1.20.0 (22 Mar 2020)

* add: Semaphore
* add: truncate
* fix: ignore node require for webpack [#18](https://github.com/liriliri/licia/issues/18)

## v1.19.0 (19 Feb 2020)

* add: morse
* add: isDarkMode
* fix($property): error when nodes are empty

## v1.18.0 (31 Jan 2020)

* add: isHidden
* add: durationFormat
* fix(extendDeep): prototype pollution [#17](https://github.com/liriliri/licia/issues/17)

## v1.17.0 (30 Dec 2019)

* add: invariant
* add: isAsyncFn
* add: Delegator
* add: sortKeys

## v1.16.0 (22 Dec 2019)

* add: bytesToWords
* add: wordsToBytes
* add: reverse
* add: create
* add: defined
* feat(md5): bytes

## v1.15.0 (17 Dec 2019)

* add: stripNum
* add: hex
* feat(strToBytes, bytesToStr): encoding

## v1.14.0 (10 Dec 2019)

* add: notify
* add: selector
* add: css
* add: sizeof

## v1.13.0 (2 Dec 2019)

* add: normalizePhone
* add: HashTable
* feat(LinkedList): find

## v1.12.0 (27 Nov 2019)

* add: seedRandom
* add: randomColor
* add: jsonClone
* fix(Color): toHex

## v1.11.0 (20 Nov 2019)

* add: PriorityQueue
* add: heapSort
* add: Heap
* fix(highlight): style for sub language

## v1.10.0 (10 Nov 2019)

* add: xpath
* add: fnv1a
* add: BloomFilter

## v1.9.0 (20 Oct 2019)

* add: Caseless
* add: emulateTouch
* fix(uncaught): pass error object instead of event

## v1.8.1 (26 Sep 2019)

* fix(highlight): style should be optional
* fix(Stack): size should not below 0 

## v1.8.0 (19 Sep 2019)

* add: toAsync
* fix(Url): incorrect result for urls without path

## v1.7.0 (4 Sep 2019)

* add: slugify
* add: universalify
* feat(compressImg): support url
* feat(isBuffer): change env to all

## v1.6.1 (29 Aug 2019)

* add: deburr

## v1.6.0 (26 Aug 2019)

* add: parseHtml
* add: html

## v1.5.9 (17 Aug 2019)

* add: crc8
* add: crc16
* add: crc32

## v1.5.8 (12 Aug 2019)

* add: eslint for release package

## v1.5.7 (11 Aug 2019)

* add: crc1
* fix(Select): [#10](https://github.com/liriliri/licia/issues/10)

## v1.5.6 (6 Aug 2019)

* add: highlight
* feat(stringifyAll): support ignore

## v1.5.5 (1 Aug 2019)

* add: stringifyAll
* add: getProto
* add: isSymbol
* feat(allKeys): support unenumerable and symbol

## v1.5.4 (20 Jul 2019)

* add: golangify
* add: stripIndent
* add: delRequireCache
* add: ini
* feat(isPortFree, getPort): support host
* feat(isFn): support async function

## v1.5.3 (15 Jul 2019)

* Add fnArgs
* Add stackTrace
* Fix mime ts definition

## v1.5.2 (9 Jul 2019)

* Add isPortFree
* Add ordinal
* Add MediaQuery

## v1.5.1 (1 Jul 2019)

* Add h
* Add isIp
* Add fileType
* Fix convertBin ts definition

## v1.5.0 (13 Jun 2019)

* Add fuzzySearch
* Add mime
* Add convertBin
* Add shellSort
* Add deprecate
* Fix Url ts definition
* Fix compressImg ts definition

## v1.4.8 (23 May 2019)

* Add levenshtein
* Add randomId
* Fix decodeUriComponent when string is totally not encoded

## v1.4.7 (14 May 2019)

* Fix randomBytes when crypto is not available
* Use var instead of const when compiled to es5

## v1.4.6 (5 May 2019)

* Support mini program
* Add wx

## v1.4.5 (5 May 2019)

* Add Lru
* Add QuickLru
* LinkedList support rmNode

## v1.4.4 (12 Apr 2019)

* Add kill
* fnParams support arrow functions

## v1.4.3 (27 Mar 2019)

* Add waitUntil
* Fix entry file ts definition

## v1.4.2 (20 Mar 2019)

* Remove redundant comments
* Fix remove ts definition
* Add browser and node entry

## v1.4.1 (13 Mar 2019)

* Fix template, use
* Add ansiColor, sleep
* debug support terminal color

## v1.4.0 (3 Feb 2019)

* Add prefetch
* Add ric
* Add fullscreen
* Add binarySearch
* Add vlq

## v1.3.0 (14 Dec 2018)

* Add openFile
* Add typescript support

## v1.2.0 (10 Nov 2018)

* Add isPrime
* Add open
* Add times
* Add uncaught
* Add normalizeHeader

## v1.1.0 (21 Oct 2018)

* Add md5
* Add rc4
* Add getPort
* Add combine
* Add strToBytes, bytesToStr

## v1.0.0 (18 Jun 2018)