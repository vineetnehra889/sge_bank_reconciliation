import { useAtomValue } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const selectedCompanyAtom = atomWithStorage<string>('sge-bank-reco-selected-company', window.frappe?.boot?.user?.defaults?.company || '', undefined, {
    getOnInit: true
})

export const useCurrentCompany = () => {
    const selectedCompany = useAtomValue(selectedCompanyAtom)
    return selectedCompany ? selectedCompany : window.frappe?.boot?.user?.defaults?.company
}