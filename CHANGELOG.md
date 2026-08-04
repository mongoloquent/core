# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.13.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.12.0...v3.13.0) (2026-08-04)

### Features

- implement morph-to relationship methods for firstOrNew, firstOrCreate, updateOrCreate, save, and saveMany ([6c4c6dc](https://github.com/ajatdarojat45/mongoloquent/commit/6c4c6dcf09e2eb98d7ab743f5fdfd0870869af04))

## [3.12.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.11.0...v3.12.0) (2026-08-03)

### Features

- set connection and database name in pivot model ([986c0ed](https://github.com/ajatdarojat45/mongoloquent/commit/986c0ede474d269f8bdfee3c5ef37db6b872ae05))

## [3.11.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.10.0...v3.11.0) (2026-06-25)

### Features

- add scoped relationships to all relationships ([85be230](https://github.com/ajatdarojat45/mongoloquent/commit/85be230288f92c1ee6a55bea65db736acacb4a7f))

## [3.10.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.9.3...v3.10.0) (2025-11-18)

### Features

- add generic type support for relationship methods in Model class ([cc7ede2](https://github.com/ajatdarojat45/mongoloquent/commit/cc7ede234db8fa470ff28e39772ed5b317d1ba36))
- add generic type support to generate and lookup methods in BelongsTo relationship ([cdcc2ad](https://github.com/ajatdarojat45/mongoloquent/commit/cdcc2ad4728751b87f5d5acf80e4071b4d6739d8))
- add generic type support to generate and lookup methods in BelongsToMany relationship ([0b8eb40](https://github.com/ajatdarojat45/mongoloquent/commit/0b8eb406c36d1e3b087bd60f0bb1597e7f865d1f))
- add generic type support to generate and lookup methods in HasMany relationship ([98abefa](https://github.com/ajatdarojat45/mongoloquent/commit/98abefafb250fe7a0ce99bdd41f942f47f272997))
- add generic type support to generate and lookup methods in HasManyThrough relationship ([62ee367](https://github.com/ajatdarojat45/mongoloquent/commit/62ee367a7985f014ddaebdf685fda47b7ba8970a))
- add generic type support to generate and lookup methods in HasOne relationship ([18d2a56](https://github.com/ajatdarojat45/mongoloquent/commit/18d2a56cc385a39d0aa0fb8dfcf0d4f02215eedb))
- add generic type support to generate and lookup methods in MorphedByMany relationship ([ff630c9](https://github.com/ajatdarojat45/mongoloquent/commit/ff630c9b16d121868a531d2c77db1d3902a97ce6))
- add generic type support to generate and lookup methods in MorphMany relationship ([f5290a6](https://github.com/ajatdarojat45/mongoloquent/commit/f5290a618bb1fd21f8aad680389247c46618722d))
- add generic type support to generate and lookup methods in MorphTo relationship ([438b236](https://github.com/ajatdarojat45/mongoloquent/commit/438b236f5c33c940a515ad67f4633e5f33a248a8))
- add generic type support to generate and lookup methods in MorphToMany relationship ([4e1ba99](https://github.com/ajatdarojat45/mongoloquent/commit/4e1ba99cccfcc5e48f021b6755374e6f448b9bb8))
- add generic type support to LookupBuilder methods ([f6481e3](https://github.com/ajatdarojat45/mongoloquent/commit/f6481e33529f8386fc45cc15b77f7342072b1ee8))
- enhance relationship interfaces with generic model support ([81de5ff](https://github.com/ajatdarojat45/mongoloquent/commit/81de5ffbb0a7145abd9b5e5122a25bcc16bf1314))

### [3.9.3](https://github.com/ajatdarojat45/mongoloquent/compare/v3.9.2...v3.9.3) (2025-11-18)

### Bug Fixes

- update paginate method return type to include Collection<M> ([b116310](https://github.com/ajatdarojat45/mongoloquent/commit/b116310b3124d231b557f23e320d784167ec7bf1))
- update paginate method return type to include Collection<M> ([69b84f0](https://github.com/ajatdarojat45/mongoloquent/commit/69b84f0ad66f8dc98204850c8097acf37138576a))
- update paginate method return type to include Collection<M> ([5aa6f86](https://github.com/ajatdarojat45/mongoloquent/commit/5aa6f863e2558eec4d5890864de4d35dd4d764e9))
- update paginate method return type to include Collection<M> ([017cb3b](https://github.com/ajatdarojat45/mongoloquent/commit/017cb3b5a5b65457c44e040c3a8b35adaa6e13ed))
- update paginate method return type to include Collection<M> ([794faa5](https://github.com/ajatdarojat45/mongoloquent/commit/794faa524c181b0eff00ea521cfa02eba7e00e3c))
- update paginate method return type to include Collection<M> ([b498992](https://github.com/ajatdarojat45/mongoloquent/commit/b498992e482ee6a887d3d5a73504e9895ffb6ece))
- update paginate method return type to include Collection<M> ([6c8fa66](https://github.com/ajatdarojat45/mongoloquent/commit/6c8fa66a642a8decb26465c271d32eff6739d84c))
- update paginate method return type to include Collection<M> ([28ad790](https://github.com/ajatdarojat45/mongoloquent/commit/28ad790f4aad7505aaea01ea840d7585034f02bd))
- update paginate method return type to include Collection<M> ([b8390f5](https://github.com/ajatdarojat45/mongoloquent/commit/b8390f585d461940e302f9782855e1b4e565cfa6))

### [3.9.2](https://github.com/ajatdarojat45/mongoloquent/compare/v3.9.1...v3.9.2) (2025-11-17)

### Bug Fixes

- update paginate method return type and setColumns visibility ([66f324a](https://github.com/ajatdarojat45/mongoloquent/commit/66f324a9bcc128898a8e5a3d9a7e5d7ce88db9cc))

### [3.9.1](https://github.com/ajatdarojat45/mongoloquent/compare/v3.9.0...v3.9.1) (2025-08-23)

### Bug Fixes

- like operator ([3aab197](https://github.com/ajatdarojat45/mongoloquent/commit/3aab197afe7a0913dae1cfe4e1b925fb5ee9994c))

## [3.9.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.8.2...v3.9.0) (2025-08-20)

### Features

- add methods for setting and making fields visible or hidden in Model class ([96cea64](https://github.com/ajatdarojat45/mongoloquent/commit/96cea643f29fc664e26afe5909d97420666f82b0))
- add support for hidden fields management in HasMany relationship generation ([0d6301e](https://github.com/ajatdarojat45/mongoloquent/commit/0d6301e294f22dc969f0a0aacfa21ce6192d42bb))
- add support for timestamps and soft delete in HasMany relationship ([3701cfb](https://github.com/ajatdarojat45/mongoloquent/commit/3701cfba32222c99ffcb78b81760ddf6e2a728d3))
- add visible method for control visibility columns ([9f84143](https://github.com/ajatdarojat45/mongoloquent/commit/9f8414305a5de83d0fbade086b376eeb05dd361b))
- enhance generate method in HasManyThrough relationship to manage hidden fields and visibility options ([0769972](https://github.com/ajatdarojat45/mongoloquent/commit/07699725b97f08e18ef2450898ecb25bd1f9dcf9))
- enhance generate method in HasOne relationship to manage hidden fields and visibility options ([33726f9](https://github.com/ajatdarojat45/mongoloquent/commit/33726f992a482f311f9da2ff32e36e3d84d99bcb))
- enhance generate method in MorphedByMany relationship to manage hidden fields and visibility options ([b2b0c00](https://github.com/ajatdarojat45/mongoloquent/commit/b2b0c00ec051a0472cc6c4b5d17f2aedebe25645))
- enhance generate method in MorphMany relationship to manage hidden fields and visibility options ([843e061](https://github.com/ajatdarojat45/mongoloquent/commit/843e06170a5bd422371d8eff1c16b32284fb6c78))
- enhance generate method in MorphTo relationship to manage hidden fields and visibility options ([537505a](https://github.com/ajatdarojat45/mongoloquent/commit/537505aab3a574a74a70f114df4c9b696a7a58c5))
- enhance generate method in MorphToMany relationship to manage hidden fields and visibility options ([d7911fd](https://github.com/ajatdarojat45/mongoloquent/commit/d7911fd7530260d7024a7d80b0f811d7d0366113))
- enhance generate method to manage hidden fields and visibility options in BelongsTo relationship ([0102969](https://github.com/ajatdarojat45/mongoloquent/commit/01029699392c16d9c2976a77f2aa59c27bae0335))
- enhance visibility control methods to accept multiple columns ([2fc3187](https://github.com/ajatdarojat45/mongoloquent/commit/2fc3187a1215e7d714cebbf0fa352ac4509e4cc2))
- refactor BelongsToMany relationship methods for improved readability and maintainability ([a7151f6](https://github.com/ajatdarojat45/mongoloquent/commit/a7151f660a0b05f7b8c8935c8d684d71d9d0a494))
- remove biome configuration file and add Prettier configuration ([7c68b18](https://github.com/ajatdarojat45/mongoloquent/commit/7c68b185ce3733afe35aa5677cb07c2318969720))
- streamline visibility management by filtering hidden and visible fields in makeHidden and makeVisible methods ([9e2ed54](https://github.com/ajatdarojat45/mongoloquent/commit/9e2ed54231cd55a0f041f515fd377be3ce5e8419))

### Bug Fixes

- update hidden field generation to use visible fields in MongoDB query ([efe1c1b](https://github.com/ajatdarojat45/mongoloquent/commit/efe1c1b7b12c15ab3db1649eddd5d05802848a13))

### [3.8.2](https://github.com/ajatdarojat45/mongoloquent/compare/v3.8.1...v3.8.2) (2025-08-14)

### [3.8.1](https://github.com/ajatdarojat45/mongoloquent/compare/v3.8.0...v3.8.1) (2025-08-13)

### Bug Fixes

- refactor transaction method to use instance of DB for better consistency ([1767be2](https://github.com/ajatdarojat45/mongoloquent/commit/1767be240b6a8f08aa0739c7e7f66f01e3dde863))

## [3.8.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.7.1...v3.8.0) (2025-08-08)

### Features

- add aggregate options support to find methods in QueryBuilder and AbstractQueryBuilder ([9117de2](https://github.com/ajatdarojat45/mongoloquent/commit/9117de256095b7ac0bf9efc576af97ac8859a52d))

### [3.7.1](https://github.com/ajatdarojat45/mongoloquent/compare/v3.7.0...v3.7.1) (2025-08-07)

### Bug Fixes

- add generic type parameter to static 'with' method in Model class ([380e422](https://github.com/ajatdarojat45/mongoloquent/commit/380e422fef7d45ba9b85ce4e7d1ac6f9f74d8b36))

## [3.7.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.6.0...v3.7.0) (2025-08-03)

### Features

- add $attributes property to QueryBuilder for improved data handling ([7a7b8e9](https://github.com/ajatdarojat45/mongoloquent/commit/7a7b8e9ce12473d06ba4423b670466919dfe5a06))
- add abstract $attributes property to AbstractQueryBuilder for enhanced flexibility ([27f3d2f](https://github.com/ajatdarojat45/mongoloquent/commit/27f3d2f0a9908887330aebfbe0bfbe8469ce6e76))
- add comprehensive QueryBuilder class with CRUD operations and query methods for MongoDB ([e479f7a](https://github.com/ajatdarojat45/mongoloquent/commit/e479f7a585e44ac9c99fef67c26c15c7259e0c09))
- add core index file to export modules for better organization ([7afba11](https://github.com/ajatdarojat45/mongoloquent/commit/7afba11a7b02df1ba8c06a9a590a0fd17d712927))
- add LookupBuilder class with select, exclude, sort, skip, and limit methods for enhanced MongoDB query handling ([2c01e22](https://github.com/ajatdarojat45/mongoloquent/commit/2c01e22b427a0c7bc5452d9b3f734a1936fa27ab))
- add missing morph relationship exports in index file ([36b14c3](https://github.com/ajatdarojat45/mongoloquent/commit/36b14c3457b24b8499a9f7b12617dc1c4d02a997))
- add Model class and index file for core model structure ([5d90423](https://github.com/ajatdarojat45/mongoloquent/commit/5d90423554d3e0ad6c66a50ed170b8bd29e4a85f))
- add MongoloquentTransactionException for transaction error handling ([bfde37b](https://github.com/ajatdarojat45/mongoloquent/commit/bfde37ba4c757e2a45db76e5c879d1dc14926000))
- add new exception classes for improved error handling and fix name in NotFoundException ([4c5c600](https://github.com/ajatdarojat45/mongoloquent/commit/4c5c6004b4c3cf33079d48e39b922a334412d102))
- add type definitions for Mongoloquent schema, query builder, and relationships ([56fd19a](https://github.com/ajatdarojat45/mongoloquent/commit/56fd19a3fdcece568b565a62c928c8a54d007b8a))
- add with method for dynamic relationship loading in Model class ([470a24d](https://github.com/ajatdarojat45/mongoloquent/commit/470a24d5f117bfa6288d8c2b8e9f19fae083b2cd))
- create index file to export query builder modules ([331ebe9](https://github.com/ajatdarojat45/mongoloquent/commit/331ebe952c49daee7971e1f80b47dfc24d238418))
- enhance HasMany relationship class with improved method implementations and consistency ([502b142](https://github.com/ajatdarojat45/mongoloquent/commit/502b1423d73929d78cd757da2b005155684cd34a))
- expand relationship types and options interfaces for enhanced modeling ([2a1491c](https://github.com/ajatdarojat45/mongoloquent/commit/2a1491cfcb24f5ebaf97cd759ffa18ecc4023cb5))
- implement abstract query builder with CRUD operations and query methods ([6d5f4b2](https://github.com/ajatdarojat45/mongoloquent/commit/6d5f4b263ce1a13ae55789237f71a628802433c8))
- implement BelongsTo relationship class with CRUD operations and query capabilities ([1cd3504](https://github.com/ajatdarojat45/mongoloquent/commit/1cd35046230b3b1f0fb7586ea751d3114ab1ac3e))
- implement BelongsToMany relationship class with CRUD operations and query capabilities ([d25fb40](https://github.com/ajatdarojat45/mongoloquent/commit/d25fb409fab847d033708f86fa2d4edef9ef6da3))
- implement Collection class with various utility methods for enhanced data manipulation ([28aa41c](https://github.com/ajatdarojat45/mongoloquent/commit/28aa41caa38c1f8ce709eb94e907ae45e8005741))
- implement custom exception classes for Mongoloquent ([4ae16a6](https://github.com/ajatdarojat45/mongoloquent/commit/4ae16a6dce1077d05925ae8dd7e02c097b2d8cd2))
- implement Database class for MongoDB connection management ([4f9c6cf](https://github.com/ajatdarojat45/mongoloquent/commit/4f9c6cf6dd891b9de0214bc752b375fea742c4f4))
- implement DB class for MongoDB connection management and transaction handling ([1efd233](https://github.com/ajatdarojat45/mongoloquent/commit/1efd23351b80b9c5679039d58ab046cee3829585))
- implement HasMany relationship class for enhanced MongoDB query handling ([d06e78a](https://github.com/ajatdarojat45/mongoloquent/commit/d06e78a621f7d98691f67721a6ade90291cd9bd3))
- implement HasManyThrough relationship class with CRUD operations and query capabilities ([26120e3](https://github.com/ajatdarojat45/mongoloquent/commit/26120e327a58d999006e649be99f50795b018fab))
- implement HasManyThrough relationship class with improved method definitions and consistency ([d6f2c7d](https://github.com/ajatdarojat45/mongoloquent/commit/d6f2c7d0b9b37c23d36d0bd85164335878e84d6c))
- implement HasOne relationship class for MongoDB query handling ([c02668d](https://github.com/ajatdarojat45/mongoloquent/commit/c02668d7073171eb6f777e140b610fbd154fab7c))
- implement MorphedByMany relationship class with CRUD operations and query capabilities ([105ad33](https://github.com/ajatdarojat45/mongoloquent/commit/105ad33a092750fef268578f80cddf6033a9915c))
- implement MorphMany relationship class with CRUD operations and query capabilities ([819749e](https://github.com/ajatdarojat45/mongoloquent/commit/819749e8522af6f516da9aaf2ce288017c70e35b))
- implement MorphTo relationship class with CRUD operations and query capabilities ([0956011](https://github.com/ajatdarojat45/mongoloquent/commit/095601141c769192eade43a158fc4ec4eff0ddd3))
- implement MorphToMany relationship class with CRUD operations and query capabilities ([46cc61f](https://github.com/ajatdarojat45/mongoloquent/commit/46cc61f2a4a046a34f4cd9d3b2029d1adfdbf5ec))
- improve type safety and method consistency in BelongsToMany relationship class ([004dcd7](https://github.com/ajatdarojat45/mongoloquent/commit/004dcd7a1bd27a896f821c05c307ffa3decca70e))
- refactor HasOne relationship class to improve method consistency and readability ([2d2c3d7](https://github.com/ajatdarojat45/mongoloquent/commit/2d2c3d7c8cecfbac9b271a3559073195f2e64bed))
- refactor MorphedByMany relationship class for improved structure and clarity ([79ba85a](https://github.com/ajatdarojat45/mongoloquent/commit/79ba85a643f185f57881f89caf9d01dcb6527695))
- reintroduce HasMany and add HasManyThrough, BelongsTo, and BelongsToMany exports in relationships index ([4d8560f](https://github.com/ajatdarojat45/mongoloquent/commit/4d8560fc921141317c7c5cebcc06fa68895f4be2))
- reorganize imports in MorphTo relationship class for improved clarity ([624b5e9](https://github.com/ajatdarojat45/mongoloquent/commit/624b5e9736af0d730cfa07f760bf0894564c266f))
- reorganize imports in MorphToMany relationship class for improved clarity ([0745a9f](https://github.com/ajatdarojat45/mongoloquent/commit/0745a9f27ac8b1dd529eb171768e0d566535666e))
- update import path for AbstractQueryBuilder and enhance type definitions in QueryBuilder class ([94df6ca](https://github.com/ajatdarojat45/mongoloquent/commit/94df6ca4b8310343ba0aef50f5708141854b45fa))
- update return types in BelongsTo relationship class for improved type safety ([c1f666a](https://github.com/ajatdarojat45/mongoloquent/commit/c1f666a51517c417da76ade931ef58961ff41f56))
- update return types in get and first methods for improved type safety ([85bd1d9](https://github.com/ajatdarojat45/mongoloquent/commit/85bd1d9910d34265a72e9e609aaacf08f3d154fc))

### Bug Fixes

- correct indentation in release:check script in package.json ([abf6f90](https://github.com/ajatdarojat45/mongoloquent/commit/abf6f9088e690d1806e17828a6653f71b1d3d602))
- rename interface for morph relationships to maintain consistency ([46e5b96](https://github.com/ajatdarojat45/mongoloquent/commit/46e5b96b1e8d53257e1c456fad1bdfc80afadc69))
- update DB class type parameter for improved type safety and adjust module exports for consistency ([4407182](https://github.com/ajatdarojat45/mongoloquent/commit/4407182f5341e9ea6e84be89c0bfe4d7f36c69d5))
- wrong db name env for test ([9606444](https://github.com/ajatdarojat45/mongoloquent/commit/96064441c4da94e8516735bbe752660bfaaacfd5))

## [3.6.0](https://github.com/ajatdarojat45/mongoloquent/compare/v3.5.4...v3.6.0) (2025-07-28)

### Features

- add nested where field feature ([0b01490](https://github.com/ajatdarojat45/mongoloquent/commit/0b01490abb5e9efd0a85c11007ec233359de6397))
- adjust for user can type custom field when select fields ([12bf47e](https://github.com/ajatdarojat45/mongoloquent/commit/12bf47eab0e9aacf2d6e4e14763298bc4d585a2a))
- user can type custom field when select fieled ([705aef2](https://github.com/ajatdarojat45/mongoloquent/commit/705aef2eb3e783a6d2a3d458b699d19cf929e981))
- user can type custom field when select fieled ([b8da7fd](https://github.com/ajatdarojat45/mongoloquent/commit/b8da7fdb5a28b4a4b04730d42f0c6e105adbbf15))
