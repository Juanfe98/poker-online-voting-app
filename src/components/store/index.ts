import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { CurrentUser, PointingType, TeamMember } from './types'

interface zustandState {
  currentUser: CurrentUser
  teamMembers: TeamMember[]
  pointingType: PointingType
  setTeamMembers: (teamMember: TeamMember[]) => void
  setPointingType: (value: PointingType) => void
  setCurrentUser: (value: CurrentUser) => void
  updateTeamMember: (teamMember: TeamMember) => void
}

export const useZustandState = create<zustandState>()(
  devtools(set => ({
    currentUser: { id: '', name: '' },
    teamMembers: [],
    pointingType: 'fibonacci',
    // This method will fully override the content of teamMembers with the new array
    setTeamMembers: teamMembers => set({ teamMembers }),
    setPointingType: pointingType => set({ pointingType }),
    setCurrentUser: currentUser => set({ currentUser }),
    updateTeamMember: (updatedMember: TeamMember) =>
      set(state => ({
        teamMembers: state.teamMembers.map(member =>
          member.id === updatedMember.id
            ? { ...member, ...updatedMember }
            : member
        )
      }))
  }))
)
