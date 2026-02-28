import { create } from 'zustand';
import { UserStore } from '@/types/user';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      name: '默认名称',
      setName: (newName: string) => set({ name: newName })
    }),
    {
      // 必选：本地存储的 key（自定义，唯一即可）
      name: 'name-storage'
      // 可选：存储位置，默认 localStorage（持久化，关闭浏览器也保留）
      // 若想仅会话有效（关闭浏览器丢失），改为 sessionStorage
      // storage: sessionStorage
    }
  )
);
