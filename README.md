# Iowa City DSA Website

The IC DSA website was originally hosted on Wix. We have decided to [cancel our subscription with Wix](https://boycottwix.org/), an Israeli company, in solidarity with Palestine and [the BDS movement](https://bdsmovement.net/). We decided to go with GitHub Pages to make it easier for others to collaborate on the website and ensure portability in the future.

A development (demo) version of the website is available at <https://icdsa.wjdenny.com>.

## How to Contribute
Members with varying technical skills can contribute to the development of the website and its content. 

### Editing Content
Content can be edited with at least a minimal knowledge of [Markdown](https://www.markdownguide.org/basic-syntax/), though some knowledge of YAML and HTML would be helpful as well.

### Development
Changing the layout or theme will require more skills, including Node.js, [Nunjucks](https://mozilla.github.io/nunjucks/), [11ty](https://www.11ty.dev/), HTML, and CSS.

### Installing Node.js and Node Package Manager (NPM)
Node.js (and NPM) is available on a wide variety of operating systems (including Windows, Linux, and MacOS). Often, package managers used by these systems have outdated builds of Node.js. To install Node.js, it may be best to [go to their website](https://nodejs.org/en/download/package-manager) and follow the instructions there to get the latest version and use a version manager.

#### Getting started
This is a quick-start guide starting from a fresh clone with Node.js and NPM installed. Feel free to add additional sections as needed for clarity.

```
git clone git@github.com:wjdenny/icdsa.git
cd icdsa
npm install
npm run serve
```

The `npm run serve` command can be used any time to build and view local changes to the project.