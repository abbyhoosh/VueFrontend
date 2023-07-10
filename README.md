# VueFrontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## Feature Workflow
```mermaid
flowchart TD
classDef tags fill:#7B9FF2
classDef booleans fill:#4259C3;

NewFeature[New: The intial tag of all new features]
DevReq[Dev Request Meeting]
DiscussedHold[Discussed - Hold]
Scoping[Scoping]
Design[Design]
PendingApproval[Pending Approval]
Refinement[Refinement: the feature will be discussed at the dev team <br> refinement meeting at the end of the sprint and assigned story points]
Ready[Ready]
Active[Active]
Testing[Testing]
PendingPR[Pending PR]
DesignTesting[Design Testing]
OPS[Ops Testing]
ScheduleDeployment[Schedule Deployment]
ReadyForDeployment[Ready for Deployment]
Closed[Closed]
PrioritizedBool{{Was the feature prioritized?}}
BugsBool{{Bugs found?}}
DesignBool{{Does this feature need design work?}}
DesignApprovalBool{{Does the design need approval?}}

class PrioritizedBool,BugsBool,DesignBool,DesignApprovalBool booleans;
class NewFeature,DevReq,DiscussedHold,Scoping,Design,PendingApproval,Refinement,Ready,Active,Testing,PendingPR,DesignTesting,OPS,ScheduleDeployment,ReadyForDeployment,Closed tags;

NewFeature-->|Feature needs to be discussed and prioritized for scoping|DevReq
DevReq-->PrioritizedBool
PrioritizedBool-->|Yes, recieved detailed requirements|Scoping
PrioritizedBool-->|No|DiscussedHold
Scoping-->|requirements are collected|DesignBool
DesignBool-->|yes|Design
DesignBool-->|no|Refinement
Design-->DesignApprovalBool
DesignApprovalBool-->|yes|PendingApproval
DesignApprovalBool-->|no|Refinement
PendingApproval-->|approved by stakeholder outside of dev team|Refinement
Refinement-->|Storypoints are assigned and feature <br> can be planned into a sprint|Ready
Ready--> Active
Active-->|Feature is done being developed|Testing
Testing-->|Initial dev testibng is done and feature needs <br> to move to staging for final Dev testing|PendingPR
PendingPR-->|feature is in staging, tested <br> a second time and needs a design review|DesignTesting
DesignTesting-->|Design testing was passed|OPS
OPS-->BugsBool
BugsBool-->|Feautre is apporbved for deployment <br> OPS will ensure there are no deployment gates|ScheduleDeployment
BugsBool-->Active
ScheduleDeployment-->|OPS scheduled deplpyment for all relevant instance|ReadyForDeployment-->|Feature is devloped and deployed|Closed
```
## Story Workflow

```mermaid
%%{init: {'theme':'dark'}}%%

flowchart TD
classDef tags fill:#7B9FF2

NewStory[New: initial tag of a new story]
StoryRefinement[Refinement]
StoryReady[Ready]
StoryActive[Active]
StoryTesting[Testing]
StoryClosed[Closed]

NewStory-->|Story is ready to be discussed and assigned <br> story points in dev refinemtn meeting|StoryRefinement
StoryRefinement-->|Story was broken into tasks during <br> the Dev sprint planning meeting|StoryReady
StoryReady-->|Work has begun on a story/its subtasks|StoryActive
StoryActive-->|Development is finished for the story|StoryTesting
StoryTesting-->|Dev tests have finished and story is done|StoryClosed

class NewStory,StoryRefinement,StoryReady,StoryActive,StoryTesting,StoryClosed tags;
```

## Bug Workflow

```mermaid
flowchart TD
classDef tags fill:#7B9FF2

NewBug[New: initial tag for a new bug]
ReadyBug[Ready]
ActiveBug[Active]
TestingBug[Testing]
BugDeployable[Deployable]
BugClosed[Closed]

NewBug-->|bug is refined and given story points|ReadyBug
ReadyBug-->|Wrok has begun on a bug|ActiveBug
ActiveBug-->|Development is finished for the bug|TestingBug
TestingBug-->|Dev team tested bug and found it deployable|BugDeployable
BugDeployable-->|Bug is complete and can be pull requested to main|BugClosed

class NewBug,ReadyBug,ActiveBug,TestingBug,BugDeployable,BugClosed tags;
```
