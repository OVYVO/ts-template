export interface StructureItem {
  name: string
  description: string
}

export interface StructureGroup {
  title: string
  purpose: string
  items: StructureItem[]
}

export interface BoundaryEntry {
  directory: string
  responsibility: string
  suitableFor: string
  avoidFor: string
  example: string
}

export interface ComparisonEntry {
  directory: string
  essence: string
  suitableFor: string
  avoidFor: string
  example: string
}

export interface HomeSummary {
  principles: string[]
  groups: StructureGroup[]
  boundaries: BoundaryEntry[]
  comparisons: ComparisonEntry[]
}
