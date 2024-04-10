import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { CurrentUser, PointingType } from './types'

interface zustandState {
  currentUser: CurrentUser
  teamMembers: string[]
  pointingType: PointingType
  setTeamMembers: (teamMember: string[]) => void
  setPointingType: (value: PointingType) => void
  setCurrentUser: (value: CurrentUser) => void
}

export const useZustandState = create<zustandState>()(
  devtools(set => ({
    currentUser: { id: '', name: '' },
    teamMembers: [],
    pointingType: 'fibonacci',
    // This method will fully override the content of teamMembers with the new array
    setTeamMembers: teamMembers =>
      set(state => ({
        teamMembers
      })),
    setPointingType: pointingType =>
      set(() => ({
        pointingType
      })),
    setCurrentUser: currentUser =>
      set(() => ({
        currentUser
      }))
  }))
)
