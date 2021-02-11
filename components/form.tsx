import * as React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { RepoInfoUser, RepoInfoRepo, RepoInfoResultSvg } from '../store/repoInfo'
import { useEffect } from 'react'

export const Form: React.FC = () => {
  const [user, setRepoInfoUser] = useRecoilState(RepoInfoUser)
  const [repo, setRepoInfoRepo] = useRecoilState(RepoInfoRepo)
  const setResultSvgUrl = useSetRecoilState(RepoInfoResultSvg)
  const initBadge = () => {
    setResultSvgUrl(`/api/releases.svg?user=${user}&repo=${repo}`)
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResultSvgUrl(`/api/releases.svg?user=${user}&repo=${repo}`)
  }
  useEffect(() => {
    initBadge()
  }, [])
  return (
    <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
      <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
        <form>
          <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="User"
              value={user}
              onChange={(e) => setRepoInfoUser(e.target.value)}
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <input
              type="text"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Title"
              value={repo}
              onChange={(e) => setRepoInfoRepo(e.target.value)}
            />
          </div>
          <div className="col-span-2 text-right">
            <button
              onClick={handleSubmit}
              className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
