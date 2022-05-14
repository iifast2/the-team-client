

# Version 1 : 

```
npm install --force
```


```
ng serve
```


<br/><br/><br/><br/>

---



## source : 
https://github.com/wafabenyahia/the-team-client



## my cli probs / Terminal

```

Copyright (C) Microsoft Corporation. Tous droits réservés.

Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6

PS C:\Users\medaminebt\Documents\GitHub\symfony5-laposte\pifront\the-team-client> npm pull origin wafa
Unknown command: "pull"                      
                                             
To see a list of supported npm commands, run:
  npm help                                   
PS C:\Users\medaminebt\Documents\GitHub\symfony5-laposte\pifront\the-team-client> git pull origin wafa
From https://github.com/wafabenyahia/the-team-client
 * branch            wafa       -> FETCH_HEAD       
Updating e3b02ca..b3c81a4
Fast-forward
 README.md                                          |   1 +
 angular.json                                       |   2 +
 package.json                                       |  11 +-
 src/app/app.module.ts                              |  19 +-
 src/app/model/forum/publication/comment.spec.ts    |   7 +
 src/app/model/forum/publication/comment.ts         |   2 +
 src/app/model/forum/publication/option.spec.ts     |   7 +
 src/app/model/forum/publication/option.ts          |  12 +
 .../forum/publication/publication.model.spec.ts    |   7 +
 .../model/forum/publication/publication.model.ts   |  22 +
 src/app/model/forum/publication/rating.spec.ts     |   7 +
 src/app/model/forum/publication/rating.ts          |   2 +
 src/app/model/forum/publication/resource.spec.ts   |   7 +
 src/app/model/forum/publication/resource.ts        |  13 +
 src/app/model/forum/publication/survey.spec.ts     |   7 +
 src/app/model/forum/publication/survey.ts          |  11 +
 src/app/model/forum/publicity/domain.ts            |   4 +
 src/app/model/forum/publicity/publicity.spec.ts    |   7 +
 src/app/model/forum/publicity/publicity.ts         |  21 +
 .../add-publicity/add-publicity.component.css      |   3 +
 .../add-publicity/add-publicity.component.html     | 114 ++++
 .../add-publicity/add-publicity.component.spec.ts  |  25 +
 .../add-publicity/add-publicity.component.ts       |  86 +++
 src/app/publicity/publicity.component.css          |  23 +
 src/app/publicity/publicity.component.html         | 607 ++++-----------------
 src/app/publicity/publicity.component.ts           | 193 ++++++-
 .../remove-publicity.component.css                 |   0
 .../remove-publicity.component.html                |  27 +
 .../remove-publicity.component.spec.ts             |  25 +
 .../remove-publicity/remove-publicity.component.ts |  27 +
 .../update-publicity.component.css                 |   3 +
 .../update-publicity.component.html                | 103 ++++
 .../update-publicity.component.spec.ts             |  25 +
 .../update-publicity/update-publicity.component.ts |  82 +++
 .../service/Forum/publication/file.service.spec.ts |  16 +
 src/app/service/Forum/publication/file.service.ts  |  25 +
 .../Forum/publication/publication.service.spec.ts  |  16 +
 .../Forum/publication/publication.service.ts       |  53 ++
 .../Forum/publicity/publicity.service.spec.ts      |  16 +
 .../service/Forum/publicity/publicity.service.ts   |  75 +++
 src/app/shared/footer/footer.component.html        |   2 +-
 src/index.html                                     |   5 +-
 src/styles.css                                     |   3 +
 43 files changed, 1225 insertions(+), 498 deletions(-)
 create mode 100644 src/app/model/forum/publication/comment.spec.ts
 create mode 100644 src/app/model/forum/publication/comment.ts
 create mode 100644 src/app/model/forum/publication/option.spec.ts
 create mode 100644 src/app/model/forum/publication/option.ts
 create mode 100644 src/app/model/forum/publication/publication.model.spec.ts
 create mode 100644 src/app/model/forum/publication/publication.model.ts
 create mode 100644 src/app/model/forum/publication/rating.spec.ts
 create mode 100644 src/app/model/forum/publication/rating.ts
 create mode 100644 src/app/model/forum/publication/resource.spec.ts
 create mode 100644 src/app/model/forum/publication/resource.ts
 create mode 100644 src/app/model/forum/publication/survey.spec.ts
 create mode 100644 src/app/model/forum/publication/survey.ts
 create mode 100644 src/app/model/forum/publicity/domain.ts
 create mode 100644 src/app/model/forum/publicity/publicity.spec.ts
 create mode 100644 src/app/model/forum/publicity/publicity.ts
 create mode 100644 src/app/publicity/add-publicity/add-publicity.component.css
 create mode 100644 src/app/publicity/add-publicity/add-publicity.component.html
 create mode 100644 src/app/publicity/add-publicity/add-publicity.component.spec.ts
 create mode 100644 src/app/publicity/add-publicity/add-publicity.component.ts
 create mode 100644 src/app/publicity/remove-publicity/remove-publicity.component.css
 create mode 100644 src/app/publicity/remove-publicity/remove-publicity.component.spec.ts
 create mode 100644 src/app/publicity/remove-publicity/remove-publicity.component.ts
 create mode 100644 src/app/publicity/update-publicity/update-publicity.component.css
 create mode 100644 src/app/publicity/update-publicity/update-publicity.component.html
 create mode 100644 src/app/publicity/update-publicity/update-publicity.component.spec.ts
 create mode 100644 src/app/publicity/update-publicity/update-publicity.component.ts
 create mode 100644 src/app/service/Forum/publication/file.service.spec.ts
 create mode 100644 src/app/service/Forum/publication/file.service.ts
 create mode 100644 src/app/service/Forum/publication/publication.service.spec.ts
 create mode 100644 src/app/service/Forum/publication/publication.service.ts
 create mode 100644 src/app/service/Forum/publicity/publicity.service.spec.ts
 create mode 100644 src/app/service/Forum/publicity/publicity.service.ts
PS C:\Users\medaminebt\Documents\GitHub\symfony5-laposte\pifront\the-team-client> npm install --force
npm WARN using --force Recommended protections disabled.
npm WARN ERESOLVE overriding peer dependency
npm WARN ERESOLVE overriding peer dependency
npm WARN ERESOLVE overriding peer dependency
npm WARN ERESOLVE overriding peer dependency
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: @angular/platform-browser@13.3.6
npm WARN Found: @angular/animations@13.3.1
npm WARN node_modules/@angular/animations
npm WARN   @angular/animations@"13.3.1" from the root project
npm WARN
npm WARN Could not resolve dependency:
npm WARN peerOptional @angular/animations@"13.3.6" from @angular/platform-browser@13.3.6
npm WARN node_modules/@angular/platform-browser
npm WARN   @angular/platform-browser@"^13.3.1" from the root project
npm WARN   4 more (@angular/forms, @angular/material, ...)
npm WARN
npm WARN Conflicting peer dependency: @angular/animations@13.3.6
npm WARN node_modules/@angular/animations
npm WARN   peerOptional @angular/animations@"13.3.6" from @angular/platform-browser@13.3.6
npm WARN   node_modules/@angular/platform-browser
npm WARN     @angular/platform-browser@"^13.3.1" from the root project
npm WARN     4 more (@angular/forms, @angular/material, ...)
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: ngx-emoji-picker@0.1.6
npm WARN Found: @angular/common@13.3.6
npm WARN node_modules/@angular/common
npm WARN   @angular/common@"^13.3.1" from the root project
npm WARN   1 more (@angular/cdk)
npm WARN
npm WARN Could not resolve dependency:
npm WARN peer @angular/common@"^9.1.9" from ngx-emoji-picker@0.1.6
npm WARN node_modules/ngx-emoji-picker
npm WARN   ngx-emoji-picker@"^0.1.6" from the root project
npm WARN
npm WARN Conflicting peer dependency: @angular/common@9.1.13
npm WARN node_modules/@angular/common
npm WARN   peer @angular/common@"^9.1.9" from ngx-emoji-picker@0.1.6
npm WARN   node_modules/ngx-emoji-picker
npm WARN     ngx-emoji-picker@"^0.1.6" from the root project
npm WARN deprecated source-map-resolve@0.6.0: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated tslint@6.1.3: TSLint has been deprecated in favor of ESLint. Please see https://github.com/palantir/tslint/issues/4534 for more information.

added 1128 packages, and audited 1129 packages in 2m

108 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\medaminebt\Documents\GitHub\symfony5-laposte\pifront\the-team-client>


```
<br/><br/>

---

<br/><br/><br/><br/>

# Version 2 
## SSSiim modif + login + register 
* Need correct email address in spring so adduser can work correctly
* NewUser ( ajoutuser Crud problem solved ! )

## Drive : 

https://drive.google.com/file/d/11c1jLgsvD9-8oxFAc76Xw4SmysTecVsv/view?usp=sharing


## My Doc - usefull tuto / links : 



https://angular.io/guide/event-binding

https://angular.io/guide/reactive-forms

https://www.techiediaries.com/build-angular-form/

https://stackoverflow.com/questions/47400929/how-to-add-authorization-header-to-angular-http-request

https://www.javaguides.net/2019/06/spring-boot-angular-8-crud-part-2-create-angular-8-app.html

https://www.javachinna.com/angular-spring-boot-crud-app/

<br/><br/><br/><br/>

---

<br/><br/><br/><br/>



