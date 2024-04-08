import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { PointingType, TeamMember } from './types'

interface zustandState {
  teamMembers: TeamMember[]
  pointingType: PointingType
  addTeamMember: (teamMember: TeamMember) => void
  setPointingType: (value: PointingType) => void
}

export const useZustandState = create<zustandState>()(
  devtools(set => ({
    teamMembers: [],
    pointingType: 'fibonacci',
    addTeamMember: teamMember =>
      set(state => ({
        teamMembers: [...state.teamMembers, teamMember]
      })),
    setPointingType: type =>
      set(() => ({
        pointingType: type
      }))
  }))
)
