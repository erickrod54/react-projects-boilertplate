import React, { useState, useContext } from 'react'

/**SideBar-Modal app version 4 - context js file - Features: 
 *          
 *          -->setting toggle functionality for toogle
 *             'SideBar' and 'Modal' Component.
 *  
 *          --> Building states for 'SideBar' and 'Modal'.
 * 
 *          --> Building Reference functionality to set a 
 *              toggle value for 'SideBar' and 'Modal'.
 * 
 *          --> Passing all the states and functionality 
 *              throught the 'value' of the Provider.
 * 
 * 
 */


const AppContext = React.createContext();

const AppProvider = ({children}) => {
   /**here i build the state to toggle 'Sidebar' */ 
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    /**here i build the state to toggle 'Modal' */
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    /**Reference function to open the 'SideBar' */
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
   /**Reference function to close the 'SideBar' */
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    /**Reference function to open the 'Modal' */    
    const openModal = () => {
        setIsModalOpen(true)
    }
    /**Reference function to close the 'Modal' */    
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider 
            /**here i pass eveerything as a object */
                                value={{
                                    isModalOpen,
                                    isSidebarOpen,
                                    openModal,
                                    openSidebar,
                                    closeModal,
                                    closeSidebar
                                }}>
                {children}
            </AppContext.Provider>
}

//here i build a 'custom hook'
export const useGlobalContext = () => {
    return useContext(AppContext)
}

/**here i export both 'context' and 'provider' */
export { AppContext, AppProvider}
