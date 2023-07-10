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

## **WorkFlows**

## Feature Workflow
```mermaid
flowchart TD
classDef booleans fill:#57A0D3;

NewFeature[New: initial tag of a new feature]
DevReq[Dev Request Meeting]
DiscussedHold[Discussed - Hold]
Scoping[Scoping]
Design[Design]
PendingApproval[Pending Approval]
Refinement[Refinement: the feature will be discussed at the Dev team <br> refinement meeting at the end of the sprint and assigned story points]
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

NewFeature-->DevReq
DevReq-->|Feature was discussed and prioritized for scoping|PrioritizedBool
PrioritizedBool-->|Yes <br> received detailed requirements|Scoping
PrioritizedBool-->|No|DiscussedHold
Scoping-->|Requirements are collected|DesignBool
DesignBool-->|Yes|Design
DesignBool-->|No|Refinement
Design-->DesignApprovalBool
DesignApprovalBool-->|Yes|PendingApproval
DesignApprovalBool-->|No|Refinement
PendingApproval-->|Approved by stakeholder outside of the Dev team|Refinement
Refinement-->|Storypoints are assigned and feature <br> can be planned into a sprint|Ready
Ready--> Active
Active-->|Feature is done being developed|Testing
Testing-->|Initial Dev testing is done and feature needs <br> to move to staging for final Dev testing|PendingPR
PendingPR-->|Feature is in staging, tested <br> a second time and needs a design review|DesignTesting
DesignTesting-->|Design testing was passed|OPS
OPS-->BugsBool
BugsBool-->|Feature is approved for deployment <br> Ops will ensure there are no deployment gates|ScheduleDeployment
BugsBool-->Active
ScheduleDeployment-->|Ops scheduled deployment for all relevant instances|ReadyForDeployment-->|Feature is developed and deployed|Closed
```
## Story Workflow

```mermaid
flowchart TD
NewStory[New: initial tag of a new story]
StoryRefinement[Refinement]
StoryReady[Ready]
StoryActive[Active]
StoryTesting[Testing]
StoryClosed[Closed]

NewStory-->|Story is ready to be discussed and assigned <br> story points in Dev refinement meeting|StoryRefinement
StoryRefinement-->|Story was broken into tasks during <br> the Dev sprint planning meeting|StoryReady
StoryReady-->|Work has begun on a story/its tasks|StoryActive
StoryActive-->|Development is finished for the story|StoryTesting
StoryTesting-->|Dev tests have finished and story is done|StoryClosed
```
-if a story is marked **Blocked** it means something else needs to be completed before that story can be started

## Bug Workflow

```mermaid
flowchart TD
NewBug[New: initial tag for a new bug]
ReadyBug[Ready]
ActiveBug[Active]
TestingBug[Testing]
BugDeployable[Deployable]
BugClosed[Closed]

NewBug-->|bug is refined and given story points|ReadyBug
ReadyBug-->|Work has begun on a bug|ActiveBug
ActiveBug-->|Development is finished for the bug|TestingBug
TestingBug-->|Dev team tested bug and found it deployable|BugDeployable
BugDeployable-->|Bug is complete and can be pull requested to main|BugClosed
```
