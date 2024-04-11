export interface TeamMember {
  id: string,
  name: string
  hasVoted?: boolean
  vote?: number
}

export interface CurrentUser {
  id: string
  name: string
}

export type PointingType =
  | 'fibonacci'
  | 'powersOfTwo'
  | 'tShirtSizing'
  | 'smallValues'
