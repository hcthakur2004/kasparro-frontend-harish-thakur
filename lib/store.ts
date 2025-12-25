import { create } from 'zustand'
import type { Brand, AuditModule, ModuleId } from './types'

interface AppState {
    // Selected state
    selectedBrand: Brand | null
    selectedModuleId: ModuleId | null

    // Data
    brands: Brand[]
    auditModules: Record<string, AuditModule>

    // Actions
    setSelectedBrand: (brand: Brand | null) => void
    setSelectedModuleId: (moduleId: ModuleId | null) => void
    loadAuditModule: (moduleId: ModuleId, data: AuditModule) => void
    setBrands: (brands: Brand[]) => void
}

export const useAppStore = create<AppState>((set) => ({
    // Initial state
    selectedBrand: null,
    selectedModuleId: null,
    brands: [],
    auditModules: {},

    // Actions
    setSelectedBrand: (brand) => set({ selectedBrand: brand }),

    setSelectedModuleId: (moduleId) => set({ selectedModuleId: moduleId }),

    loadAuditModule: (moduleId, data) =>
        set((state) => ({
            auditModules: {
                ...state.auditModules,
                [moduleId]: data
            }
        })),

    setBrands: (brands) => set({ brands }),
}))
