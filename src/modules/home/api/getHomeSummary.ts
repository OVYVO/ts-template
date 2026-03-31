import type { HomeSummary } from '@/modules/home/types/home'

const homeSummary: HomeSummary = {
  principles: [
    '入口初始化收敛到 app 层',
    '通用能力与业务模块明确分层',
    '响应式逻辑与纯工具函数拆分',
    '基础设施服务从页面逻辑中解耦',
  ],
  groups: [
    {
      title: 'app',
      purpose: '应用启动、路由注册、状态挂载等全局初始化',
      items: [
        { name: 'app/main.ts', description: '应用启动入口与插件注册' },
        { name: 'app/router', description: '路由实例与滚动行为' },
        { name: 'app/store', description: 'Pinia 根级注册入口' },
      ],
    },
    {
      title: 'shared',
      purpose: '通用组件、样式、工具、基础服务等跨模块能力',
      items: [
        { name: 'components', description: '基础组件和通用组合组件' },
        { name: 'hooks', description: '全局可复用的组合式逻辑' },
        { name: 'services', description: 'HTTP、存储等基础设施封装' },
        { name: 'utils', description: '纯函数工具' },
      ],
    },
    {
      title: 'modules',
      purpose: '按业务域组织视图、组件、类型与接口能力',
      items: [
        { name: 'modules/home/views', description: '业务模块的页面入口' },
        { name: 'modules/home/components', description: '业务模块的局部组件' },
        { name: 'modules/home/api', description: '业务模块的数据访问层' },
        { name: 'modules/home/types', description: '业务模块的类型定义' },
      ],
    },
  ],
  boundaries: [
    {
      directory: 'components',
      responsibility: '放通用且弱业务的基础组件或组合组件',
      suitableFor: 'BaseButton、EmptyState、可跨多个模块复用的 UI 组件',
      avoidFor: '只服务单一业务模块的页面块或带明显业务语义的组件',
      example: 'components/base/BaseButton.vue',
    },
    {
      directory: 'layouts/widgets',
      responsibility: '放布局相关且跨页面复用的页面区块（由 layout 负责组织）',
      suitableFor: '页头、侧边栏、TopBar、跨页面信息面板',
      avoidFor: '纯基础控件，或只属于某一个业务模块的局部组件',
      example: 'layouts/widgets/AppHeader.vue',
    },
    {
      directory: 'layouts',
      responsibility: '放页面骨架与路由容器，负责组织整体结构',
      suitableFor: 'DefaultLayout、AuthLayout、后台主框架布局',
      avoidFor: '细颗粒业务组件或具体页面内容本身',
      example: 'layouts/DefaultLayout.vue',
    },
    {
      directory: 'modules/common/views',
      responsibility: '放全局/跨业务域页面（例如 404/403/500 等）',
      suitableFor: '404 页面、403 页面、500 页面、About/Changelog',
      avoidFor: '某个业务模块私有的页面',
      example: 'modules/common/views/NotFoundView.vue',
    },
    {
      directory: 'modules',
      responsibility: '按业务域收拢页面、组件、类型、接口和 hooks',
      suitableFor: 'user、dashboard、home 这类完整业务域能力',
      avoidFor: '全局共享能力或纯基础设施封装',
      example: 'modules/home/views/HomeView.vue',
    },
    {
      directory: 'hooks',
      responsibility: '放依赖 Vue 响应式能力的可复用逻辑',
      suitableFor: 'useDocumentTitle、useHomePreferences、useAuth',
      avoidFor: '纯字符串处理、纯计算工具或网络基础设施',
      example: 'hooks/useDocumentTitle.ts',
    },
    {
      directory: 'services',
      responsibility: '放 HTTP、存储、日志等基础设施能力',
      suitableFor: 'request client、token 管理、localStorage 封装',
      avoidFor: '直接操作页面状态的响应式逻辑',
      example: 'services/storage/local-storage.ts',
    },
    {
      directory: 'utils',
      responsibility: '放无状态、纯函数的工具方法',
      suitableFor: '格式化、转换、校验、映射等纯计算逻辑',
      avoidFor: '依赖 ref/watch 或需要持久化、副作用的逻辑',
      example: 'utils/formatters.ts',
    },
  ],
  comparisons: [
    {
      directory: 'constants',
      essence: '固定值与配置项',
      suitableFor: '应用标题、导航配置、状态映射、默认分页参数',
      avoidFor: '函数逻辑、响应式状态、接口请求、类型定义',
      example: 'constants/app.ts',
    },
    {
      directory: 'types',
      essence: '类型声明与接口定义',
      suitableFor: 'AppNavItem、UserInfo、接口返回类型、表单类型',
      avoidFor: '运行时代码、配置值、工具函数、网络请求实现',
      example: 'types/app.ts',
    },
    {
      directory: 'utils',
      essence: '无状态纯函数工具',
      suitableFor: '格式化、转换、校验、映射、计算逻辑',
      avoidFor: '依赖 ref/watch 的逻辑、持久化、请求副作用',
      example: 'utils/formatters.ts',
    },
    {
      directory: 'hooks',
      essence: '依赖 Vue 响应式系统的复用逻辑',
      suitableFor: 'useDocumentTitle、useTheme、usePagination、useAuth',
      avoidFor: '单纯常量、纯函数工具、基础设施封装',
      example: 'hooks/useDocumentTitle.ts',
    },
  ],
}

export async function getHomeSummary() {
  return Promise.resolve(homeSummary)
}
