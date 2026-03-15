'use client'

import GlobalFooter from '@/components/GlobalFooter'
import {
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { Dropdown, Input, Popover, theme } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import { menus } from '../../../../config/meun'
import { listQuestionBankByPageUsingPost } from '@/api/questionBankController'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'

const SearchInput = () => {
  const { token } = theme.useToken()
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        variant="borderless"
      />
    </div>
  )
}

interface Props {
  children: React.ReactNode
}

export default function BasicLayout({ children }: Props) {
  const pathname = usePathname()

  const loginUser = useSelector((state: RootState) => state.loginUser)

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <ProLayout
        title="面试呀"
        layout="top"
        prefixCls="my-prefix"
        logo={
          <Image
            src="/assets/logo.png"
            height={32}
            width={32}
            alt="面试鸭刷题网站 - 程序员鱼皮"
          />
        }
        location={{
          pathname,
        }}
        token={{
          header: {
            colorBgMenuItemSelected: 'rgba(0,0,0,0.04)',
          },
        }}
        siderMenuType="group"
        menu={{
          collapsedShowGroupTitle: true,
        }}
        avatarProps={{
          src: loginUser.userAvatar || '/assets/not-login-avatar.png',
          size: 'small',
          title: loginUser.userName,
          render: (props, dom) => {
            return (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: 'logout',
                      icon: <LogoutOutlined />,
                      label: '退出登录',
                    },
                  ],
                }}
              >
                {dom}
              </Dropdown>
            )
          },
        }}
        actionsRender={(props) => {
          //   if (props.isMobile) return [];x
          //   if (typeof window === 'undefined') return [];
          return [
            <SearchInput key={'search-input'} />,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ]
        }}
        headerTitleRender={(logo, title, _) => {
          const defaultDom = (
            <a>
              {logo}
              {title}
            </a>
          )
        //   if (typeof window === 'undefined') return defaultDom
        //   if (document.body.clientWidth < 1400) {
        //     return defaultDom
        //   }
          if (_.isMobile) return defaultDom
          return <>{defaultDom}</>
        }}
        // menuFooterRender={(props) => {
        //     return <GlobalFooter />
        // }}
        footerRender={() => <GlobalFooter />}
        onMenuHeaderClick={(e) => console.log(e)}
        menuDataRender={(): any[] => {
          return menus;
        }}
        menuItemRender={(item, dom) => (
          <Link
            href={item.path || '/'}
            target = {item.target}
          >
            {dom}
          </Link>
        )}
      >
        {children}
      </ProLayout>
    </div>
  )
}
