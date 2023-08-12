# SAFe Requirements Model

The SAFe Requirements Model is a hierarchical model that defines requirements at the Epic, Feature, and Story levels. It is based on the [INVEST](https://en.wikipedia.org/wiki/INVEST_(mnemonic)) model for writing good user stories. The SAFe Requirements Model is a living document that will be updated as the product evolves and new requirements are identified.

![SAFe_Requirements_Model_F01](https://scaledagileframework.com/wp-content/uploads/2023/03/SAFe_Requirements_Model_F01-2.svg)
[SAFe Requirements Model](https://scaledagileframework.com/safe-requirements-model/)

## Our Class Diagram Implementation

Taking the SAFe Requirements Model as a reference, we have implemented the following Class Diagram, and is the one used to generate the `frontMatter.taxonomy.contentTypes` json.

Feel free to modify it to fit your needs, to suggest improvements, or sharing your ideas in the [Discussions](giscussions) section, or reporting an [Issue](issues). Togheter we can improve this project! 🚀

```mermaid
classDiagram
  note for MinimalViableProduct "Early and minimal version of the product\nto approve/disprove the hypothesis"
  note for PotentialMinimalViableProduct "Additional potential features\nthat could be included in MVP"
  note for UserStory "is an enabler story when\n it is a technical requirement"

  %%region LeanBussinessCase
  class LeanBussinessCase {
    + LeanBussinessCaseId: int
    + EpicId: int
    + FunnelEntryDate: string
    + EpicOwner: string
    + KeyStakeholders: List~string~
    + LeadingIndicators: List~string~
    + InScope: List~string~
    + OutOfScope: List~string~
    + NonFunctionalRequirements: List~string~
    + AnalysisSummary: string
    + goRecommended: bool
    + goNoGoRecommendation: string
  }
  class MinimalViableProduct {
    + MinimalViableProductId: int
    + Features: List~int~
    + Capabilities: List~int~
  }
  class PotentialMinimalViableProduct {
    + MinimalViableProductId: int
    + Features: List~int~
    + Capabilities: List~int~
  }  
  %%endregion LeanBussinessCase

  class Epic {
    + EpicId: int
    + Title: string
    + EpicDescription: string
    + EpicHypothesis: string
    + OutcomeHypothesis: List~string~
    %% Epic is an enabler epic when it is a technical requirement, otherwise is BusinessEpic
    + enabler: bool
    + isHypothesisProved(): bool
  }

  class Capability {
    + CapabilityId: int
    + Title: string
    + Description: string
    %% Capability is an enabler capability when it is a technical requirement, otherwise is BusinessCapability
    + enabler: bool
  }

  class Feature {
    + FeatureId: int
    + Title: string
    + Description: string
    + enabler: bool
  }

  class UserStory {
    + StoryId: int
    + Title: string
    + Description: string
    %% UserStory is an enabler when it is a technical requirement
    + enabler: bool
    + AcceptanceCriteria: List~string~
  }

  class StoryAcceptanceTest {
    + TestId: int
    + Title: string
    + Description: string
  }

  class CapabilityAcceptanceTest {
    + TestId: int
    + Title: string
    + Description: string
  }

  class FeatureAcceptanceTest {
    + TestId: int
    + Title: string
    + Description: string
  }

  class UnitTest {
    + TestId: int
    + Title: string
    + Description: string
  }

  Epic <|-- PortfolioEpic
  Epic <|-- SolutionTrainEpic
  Epic <|-- ARTEpic
  %%Epic <|-- BusinessEpic
  %%Epic <|-- EnablerEpic
  LeanBussinessCase "1" *-- "1" Epic
  MinimalViableProduct "1" --* "1" LeanBussinessCase
  PotentialMinimalViableProduct --* LeanBussinessCase
  MinimalViableProduct o-- Feature

  %% Refactorized to be included in MVP
  %%Epic "1" -- "1..*" Capability
  %%Epic "1" -- "1..*" Feature
  Capability "0..1" --> "1..*" Feature : Realized by
  Feature "0..1" --> "1..*" UserStory : Realized by
  Feature "1" --> "1..*" FeatureAcceptanceTest : done when passes
  Capability "1" --> "1..*" CapabilityAcceptanceTest : done when passes
  UserStory "1" --> "0..*" UnitTest : done when passes
  UserStory "1" -- "1..*" StoryAcceptanceTest : done when passes

```

Generate the `frontMatter.taxonomy.contentTypes` json based on previous Class Diagram, following example below:

```json
"frontMatter.taxonomy.contentTypes": [
  {
    "name": "Epic",
    "previewPath": null,
    "pageBundle": false,
    "fields": [
      {
        "title": "Title",
        "name": "title",
        "type": "string"
      },
      {
        "title": "Description",
        "name": "description",
        "type": "string"
      },
      {
        "title": "Publishing date",
        "name": "date",
        "type": "datetime",
        "default": "{{now}}",
        "isPublishDate": true
      },
      {
        "title": "Last modified date",
        "name": "lastmod",
        "type": "datetime",
        "isModifiedDate": true
      },
    ]
  },
  {
    name: "Capability",
    previewPath: null,
    pageBundle: false,
    fields: [
      {
        title: "Title",
        name: "title",
        type: "string"
      },
      {
        title: "Description",
        name: "description",
        type: "string"
      },
      {
        title: "Publishing date",
        name: "date",
        type: "datetime",
        default: "{{now}}",
        isPublishDate: true
      },
      {
        title: "Last modified date",
        name: "lastmod",
        type: "datetime",
        isModifiedDate: true
      },
    ]
  }
]
```

Association -->  
In an association relationship, one or more objects can be associated with each other.  
Objects are linked with each other.

o--	Aggregation  
In an aggregation relationship, objects that are associated with each other can remain in the scope of a system without each other.  
Linked objects are not dependent upon the other object.

*--	Composition  
In a composition relationship, objects that are associated with each other cannot remain in the scope without each other.  
Objects are highly dependent upon each other.

## References

- [SAFe Requirements Model](https://scaledagileframework.com/safe-requirements-model/)
- [FrontMatter](https://frontmatter.codes) and [Content Types](https://frontmatter.codes/docs/content-creation/content-types)