import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // 你的状态页标题
  title: "adnaix's Status Page",
  // 头部链接保持不变
  links: [
    { link: 'https://adnaixo-bfn8n.hf.space/', label: 'bfn8n' },
    { link: 'https://tai-kiiv.onrender.com/', label: 'render' },
    { link: 'mailto:adnaixleo@gmail.com', label: 'Email Me', highlight: true },
  ],
  // [重要] 将你的新 monitor ID 放在这里，这样它们才会显示在页面上
  group: {
    '🌐 Public Services': ['hugging_face_service', 'render_service'], // <-- 修改这里，使用新的 monitor ID
  },
  favicon: '/favicon.ico',
  maintenances: {
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  // monitors 数组是核心，我们在这里定义要保活的链接
  monitors: [
    // 第一个链接的监控配置
    {
      // `id` 必须是唯一的
      id: 'hugging_face_service',
      // `name` 是在状态页上显示的名字
      name: 'bfn8n (Hugging Face)',
      // `method` 设置为 'GET'
      method: 'GET',
      // `target` 就是你的链接地址
      target: 'https://adnaixo-bfn8n.hf.space/',
      // [可选] `tooltip` 是鼠标悬停时显示的提示
      tooltip: 'Monitoring Hugging Face Space to keep it alive.',
      // [可选] `statusPageLink` 是点击后跳转的链接
      statusPageLink: 'https://adnaixo-bfn8n.hf.space/',
    },
    // 第二个链接的监控配置
    {
      id: 'render_service',
      name: 'render (Render.com)',
      method: 'GET',
      target: 'https://tai-kiiv.onrender.com/',
      tooltip: 'Monitoring Render service to keep it alive.',
      statusPageLink: 'https://tai-kiiv.onrender.com/',
    },
  ],
  // 通知部分可以根据你的需求配置，如果不需要可以忽略
  notification: {
    // appriseApiServer: 'https://apprise.example.com/notify',
    // recipientUrl: 'tgram://bottoken/ChatID',
    timeZone: 'Asia/Shanghai',
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
    },
  },
}

// 示例的维护计划引用了已经删除的 monitor ID，因此这里将其清空
// 如果你将来需要设置维护，可以再添加回来
const maintenances: MaintenanceConfig[] = []

// 不要忘记导出
export { pageConfig, workerConfig, maintenances }
