export default [
  {
    path: '/',
    component: '@/layouts/app',
    routes: [
      { path: '/', exact: true, component: '@/pages/index' },
      {
        path: '/HomeworkEdit',
        exact: true,
        component: '@/pages/HomeworkEdit',
        title: '作业编辑',
      },
    ],
  },
  { component: '@/pages/404' },
];
