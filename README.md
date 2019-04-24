# == InstituteOfDirectors ==

Hello! This is the codebase for the Institute of Directors' annual report 2018




# == File structure ==
The following is the file structure for this project:
```
institute-of-directors
-src
---app
-----components
-----pages
-----app files (html, scss, ts)
---assets
---styles
---styles.scss
```

* <strong>Components</strong> holds templates and non-changing elements of the website like the header, footer, homepage and faces-of-governance template. You shouldn't need to make any changes to these files
* <strong>Pages</strong> hold the files that you WILL be editing for content, organized by section based on the website.
* <strong>Styles</strong> folder holds CSS files for specific, regularly used elements, as well as CSS variables used throughout the website
* <strong>styles.scss</strong> declares the fonts and ties all the CSS files together

Within each Page folder, there will be 4 files:

* <strong>page.component.html</strong> is the HTML for that page. This is where you'll likely be working in the most.
* <strong>page.component.scss</strong> is the CSS for that page. The CSS that lives here will only apply to that specific page and nowhere else
* <strong>page.component.spec.ts</strong> for testing. Don't worry about this file.
* <strong>page.component.ts</strong> holds the logic for a page. Most pages don't have anything here. Only some (listed below) have the information that gets inserted into templates or loops.

## Unique files
As mentioned, most of the time you'll only need to mess around with the HTML files, and maybe the SCSS files. But some pages have logic in order to make life easier. These pages are:

### Our Council
The list of councillors lives in the ```.ts``` file. ```[square brackets]``` represent a list - in this case, a list of titledCouncillors and a list of councillors. ```{squiggly brackets}``` represent one item within that list and contains the information for that person.

### Snapshot of our Year
The "snapshot" pages calls the "stat-block" (```<app-stat-block></app-stat-block>```) template to make life easier when styling each block. The logic is already set up to pass info from the parent ("Snapshot") to the child ("stat-block"). To update the actual content, go to ```snapshot-of-our-year.component.ts```, where the stats are organized by type/heading. ```col``` and ```blockSize``` are for styling, so leave those as is.

### Faces of governance
Similar to Snapshot above, these files call the faces-of-governance-template to simply our lives. Therefore, the styling of these pages live in ```components/faces-of-governance-template```, and you'll want to update the HTML content of each person in their respective folders under ```pages/faces-of-governance```.

### App.component files
These files live loosely inside the ```app``` folder. They control the website as a whole and call the other components to populate the screen. You shouldn't have to make any changes in these files, just nice to know about. The ones with 'component' act the same as all the other files, and the ones named with 'module' control how linking between pages work.

If you ever needed to change the background image or colour of a page, you would access this at ```app.component.scss```.

## Styles Pages
These should be relatively straight-forward, and contain styling pages that apply globally rather than just to specific pages. The CSS variable files live here as well. Wherever possible, it's best to use custom variables instead of numbers or colours for easy changes. You can also designate new or modify existing variables here. As of right now, bootstrap-variables.scss doesn't actually do anything.




# == Collaborating on GitHub ==
## How to download and edit this code

1. <strong>Clone the repo/code onto your computer: </strong>Click the green "Clone or download" button on the repo website, then in command line in the folder where you would like the code, type ```git clone COPIED-URL```
  * We need to be working on and pushing our respective code to the same repo in order for us to both see and make use of each others' work. Right now, the code lives on my GitHub and we'll both be working within there. If you prefer the code lived somewhere else or on someone else's account, you can fork it there and just let me know so that I point my code there. Certainly at the end of the project, you can fork this code wherever you would like so that you have a copy for yourself/Moxie.
2. I would recommend working on a unique branch. This way, changes made by multiple people won't overlapped and it makes it easier to merge different work stream. To do so, type in command line ```git branch -b YOUR-BRANCH-NAME```
  * to see the branches that you have going on, you can always type ```git branch```
3. <strong>Preview the code in the browser</strong>. Type ```ng serve``` into command line. It should give you feedback as it loads up, then go to ```localhost:4200``` in your browser to view your changes live. *You have to keep the ```ng serve``` tab of command line open if you want to see your live changes. To stage and commit, open a new tab or window of command line.*

4. Once you're satisfied with the changes you've made, ```add``` the files to your index/staging area, then ```commit``` them.
  * there are 2 ways you can do this. First, is via the command line. Use ```git status``` to see unstaged, staged and committed files. Second, you can use ```git gui```, which will open a UI that will show you the same things, but visually. I like to use this, where I can view the changes I've made to each file, and then add them individually before committing them. ctrl+t stages a file (equivalent to ```git add```).
  * I like to have commits for every chunk of work I complete. "Changed font color" is probably too minute. Instead, I would commit once I've applied all of my changes for that page: "Our Members page style finalized" or "All content included for Our Members". It's not a super big deal though so do what feels right.

## How to share code
1. After you've made all your desired changes for that bit of work and wrote up all your commits, ```push``` your code. Because you're working on a separate branch, when you ```push```, your code will live separately from ```master```. That's helpful so that we don't push code at the same time to master.
* When you ```push``` for the first time, you might be told that you need to set the 'upstream'. The code that you need to enter should be suggested, so just copy and paste that. (Hint: ctrl+C and ctrl+V don't actually work in command line, but rather it's ctrl+shift+C and ctrl+shift+V)

2. <strong>Create a pull request</strong>. Pull requests are how branches get combined into the master code/branch. Once you 'Create the Pull Request', you can 'accept' it as well (unless you'd like someone [me] to review the code first and then accept it. Code review is often what we do when we've got a big project and it's important to make sure the logic is sound. Probably not necessary for our wee project and our impending deadline.)

## How to download other people's edits
*Git is complicated as fck. Here's a website I use to visually help me understand what's going on with Git: http://ndpsoftware.com/git-cheatsheet.html#loc=remote_repo*

*Workspace is the code you're working on; ```git add``` moves code into the Index, then ```git commit``` moves it to your Local Repository. ```git rebase``` moves code from the Local/Upstream Repository into your workspace.*

When either of us makes a change, it's valuable to <strong>rebase</strong> our local code so that it's up-to-date with the ```master``` branch. <strong>To rebase:</strong>
* ```git rebase origin/master```: 'origin' means the version of the branch that lives on the website

Rebasing takes what lives in origin/master and applies it onto your local code. It DOES NOT delete your code, but instead places it alongside any changes you have made. If there are no conflicts, your local codebase will update with the changes without interfering with the files you are working on. If there is a conflict, you will see it in command line and you can go in atom and resolve them one-by-one. It's colour-coded with "Your changes" vs "Their changes" and usually not too scary, you just select which one you prefer to go with (or edit the file directly in atom) and then ```git add .``` and ```git rebase --continue```.

* <strong>Example #1:</strong> Sarah is working on file ```committees.component.scss```. Maia pushed changes to the repo of the file ```our-council.component.scss```. Sarah rebases with ```git rebase origin/master```. Any of Sarah's changes to ```committees.component.scss``` will still be there, and ```our-council.component.scss``` will be updated with Maia's changes.
* <strong>Example #2:</strong> Sarah is working on file ```from-the-ceo.component.scss```. Maia pushed changes to the repo of that SAME file. Sarah rebases with ```git rebase origin/master```. Command line will tell Sarah that there are merge conflicts. Sarah goes to ```from-the-ceo.component.scss``` and selects the block of code that includes what she wants her final local version to have - that can be by simply clicking "Use Me", or by manually editing the code. *(Note: Conflicts usually happen when both of us changed, say, line 22 in the same file. If I changed line 22 but you're working on line 100 there shouldn't be a merge conflict).* Once Sarah is satisfied with the merging, she returns to command line, adds the file to the staging area, and then continues the rebase.

Make sure to rebase before pushing or creating a pull request - it can save some grief of conflicts later on.



# == Odometers ==
To turn a numer into an odometer:
1. In the HTML file, add 'odometer' as a class AND an id to the number. Example: ```<p class="title blue odometer" id="odometer">123</p>```
2. In the .ts file of that same component, include the following code between the { squiggly braces } that starts with OnInit. It should look like this:
```  ngOnInit() {
      setTimeout(function(){
          odometer.innerHTML = THENUMBER;
      }, 1000);
    }
```
