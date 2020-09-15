import { IComment } from '../../api/types'
export interface CommentsState {
  comments: IComment[]
  loading: true | false
  error: string | null
}
