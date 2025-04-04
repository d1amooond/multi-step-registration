import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RegistrationSteps } from '@/enums';
import {
  RegistrationUserData,
  RegistrationUserDetails,
  RegistrationAddressDetails,
  RegistrationAccountDetails,
} from '@/types/registration';

interface RegistrationStore {
  currentStep: RegistrationSteps;
  userDetails: RegistrationUserDetails;
  addressDetails: RegistrationAddressDetails;
  accountDetails: RegistrationAccountDetails;
  isFormComplete: boolean;

  setCurrentStep: (step: RegistrationSteps) => void;
  updateUserDetails: (data: Partial<RegistrationUserDetails>) => void;
  updateAddressDetails: (data: Partial<RegistrationAddressDetails>) => void;
  updateAccountDetails: (data: Partial<RegistrationAccountDetails>) => void;
  completeForm: () => void;
  resetForm: () => void;
  nextStep: () => void;
  prevStep: () => void;

  getUserData: () => RegistrationUserData;
}

const initialState = {
  currentStep: RegistrationSteps.UserDetails,
  userDetails: {
    firstName: '',
    lastName: '',
    email: '',
  },
  addressDetails: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
  },
  accountDetails: {
    username: '',
    password: '',
  },
  isFormComplete: false,
};

export const useRegistrationStore = create<RegistrationStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      setCurrentStep: (step) => set({ currentStep: step }),
      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(
            state.currentStep + 1,
            RegistrationSteps.Review,
          ),
        })),
      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(
            state.currentStep - 1,
            RegistrationSteps.UserDetails,
          ),
        })),

      // Form data updates
      updateUserDetails: (data) =>
        set((state) => ({
          userDetails: { ...state.userDetails, ...data },
        })),
      updateAddressDetails: (data) =>
        set((state) => ({
          addressDetails: { ...state.addressDetails, ...data },
        })),
      updateAccountDetails: (data) =>
        set((state) => ({
          accountDetails: { ...state.accountDetails, ...data },
        })),

      completeForm: () => set({ isFormComplete: true }),
      resetForm: () => set(initialState),

      getUserData: () => {
        const { userDetails, addressDetails, accountDetails } = get();
        return {
          registrationUserDetails: userDetails,
          registrationAddressDetails: addressDetails,
          registrationAccountDetails: accountDetails,
        };
      },
    }),
    {
      name: 'registration-storage',
      partialize: (state) => ({
        userDetails: state.userDetails,
        addressDetails: state.addressDetails,
        accountDetails: state.accountDetails,
        isFormComplete: state.isFormComplete,
      }),
    },
  ),
);
