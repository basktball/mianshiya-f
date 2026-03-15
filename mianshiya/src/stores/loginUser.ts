import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const DEFAULT_LOGIN_USER: API.LoginUserVO = {
    userAvatar: '/assets/not-login-avatar.png',
    userName: '未登录',
    userProfile: '暂无简历',
    userRole: 'guest',
}

export const loginUserSlice = createSlice({
  name: 'loginUser',
  initialState: DEFAULT_LOGIN_USER,
  reducers: {
        setLoginUser: (state, action: PayloadAction<API.LoginUserVO> ) => {
            return {
                ...action.payload
            }
        }
  }
})

// Action creators are generated for each case reducer function

export const { setLoginUser } = loginUserSlice.actions

export default loginUserSlice.reducer