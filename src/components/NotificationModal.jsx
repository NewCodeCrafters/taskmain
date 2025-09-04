import { ClipboardCheck, FileText, Mail, MailCheck, MessageCircleIcon } from 'lucide-react'
import mail from '../assets/mail.svg'
import React, { useEffect, useState } from 'react'
import { notifications } from '../data/notifications'

const NotificationModal = ({
    onClose,
    showFunction
}) => {
    const now = Date.now()
    const [filter, setFilter] = useState('all')
    // console.log(notifications.filter(notification => notification.isRead === false))
    useEffect(() => {
        function close() {
                document.addEventListener('keydown', (e) => {
                // console.log(e.key === 'Escape')
                if(e.key === 'Escape'){
                    showFunction(false)
                } else{
                    return
                } 
            })
        }

        return () => close()
  
    }, [])
  return (
    <div 
    className='absolute'
    onClick={onClose}>
        <div className='inset-0 z-0 bg-black/15 fixed'>

        </div>
        <div 
        className='bg-white/65 dark:bg-background/65 dark:text-white glass  absolute shadow-lg md:-right-1   rounded-xl md:h-[30rem] md:w-[33rem] md:max-w-[33rem] md:top-0 h-[38rem] w-[23rem] z-50  -right-[8rem]  top-3 md:max-h-[30rem] overflow-y-auto scrollBar text-sm dark:border dark:border-neutral-700'

        onClick={(e) => e.stopPropagation()}>
            <div className={`flex after:bg-neutral-300 after:dark:bg-neutral-700 after:w-full after:-top-[2px] after:relative after:h-[2px] flex-col w-full sticky top-0  justify-between text-sm  border-b-gray-600 pt-7 dark:bg-black/85 bg-white/85  glass z-50 whitespace-nowrap`}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                    <p 
                    className={`cursor-pointer ${
                        filter === 'all' ? 'border-b-4 border-primary-400 text-primary-400' : ''
                    }   px-4 pb-2 z-50`}
                    onClick={() => setFilter('all')}>All</p>
                    <p 
                    className={`cursor-pointer ${
                        filter === 'unread' ? 'border-b-4 border-primary-400 text-primary-400' : ''
                    }   px-4 pb-2  z-50`}
                    onClick={() => setFilter('unread')}>Unread ({notifications?.filter(notification => notification.isRead === false).length})</p>
                </div>
                <p className='flex items-center gap-3 text-primary-500 cursor-pointer px-4 pb-2 z-50'><MailCheck /> Mark all as read</p>
                </div>
            </div>
                    {
                        notifications?.length ? (
                        <div className='p-5'>
                        <div className='flex flex-col gap-4 items-start pt-4'>
                            <p className='text-sm'>Last 7 days</p>
                            
                                { filter ==='all' ? notifications?.map((notification, i) => (
                                    (now - notification.timeStamp)  / (1000 * 60 * 60 * 24) <= 7 && (
                                     <div className='flex items-center gap-4' key={i}>
                                        <div className='bg-primary-300 text-white w-fit p-4 rounded-full'>
                                         {
                                             notification.type === 'Reminder' ? <Mail /> : notification.type === 'task Completed' ? <ClipboardCheck /> : <MessageCircleIcon />
                                         }
                                        </div>
                                        <div className='flex flex-col items-start gap-1'>
                                         <h4 className={`text-[1rem] ${
                                            notification.isRead === false ? 'font-bold' : 'font-medium'
                                         }`}>{
                                            notification.title
                                            }</h4>
                                         <p className='text-[0.8rem] text-neutral-500 font-medium'>{
                                            notification.description
                                            }</p>
                                        </div>
                                    </div>
                                    )
                                )) : filter === 'unread' && notifications?.filter(notification => notification.isRead === false).map((notification, i) => (
                                    (now - notification.timeStamp)  / (1000 * 60 * 60 * 24) <= 7 && (
                                     <div className='flex items-center gap-4' key={i}>
                                        <div className='bg-primary-300 text-white w-fit p-4 rounded-full'>
                                         {
                                             notification.type === 'Reminder' ? <Mail /> : notification.type === 'task Completed' ? <ClipboardCheck /> : <MessageCircleIcon />
                                         }
                                        </div>
                                        <div className='flex flex-col items-start gap-1'>
                                         <h4 className={`text-[1rem] ${
                                            notification.isRead === false ? 'font-bold' : 'font-medium'
                                         }`}>{
                                            notification.title
                                            }</h4>
                                         <p className='text-[0.8rem] text-neutral-500 font-medium'>{
                                            notification.description
                                            }</p>
                                        </div>
                                    </div>
                                    )
                                ))
                                }
                        </div>
                        <div className='flex flex-col gap-4 items-start pt-4'>
                            <p className='text-sm'>Last 30 days</p>
                            
                                {filter ==='all' ? notifications.map((notification, i) => (
                                    (now - notification.timeStamp)  / (1000 * 60 * 60 * 24) >= 7 && (
                                     <div className='flex items-center gap-4' key={i}>
                                        <div className='bg-primary-300 text-white w-fit p-4 rounded-full'>
                                         {
                                             notification.type === 'Reminder' ? <Mail /> : notification.type === 'task Completed' ? <ClipboardCheck /> : <MessageCircleIcon />
                                         }
                                        </div>
                                        <div className='flex flex-col items-start gap-1'>
                                         <h4 className={`text-[1rem] ${
                                            notification.isRead === false ? 'font-bold' : 'font-medium'
                                         }`}>{
                                            notification.title
                                            }</h4>
                                         <p className='text-[0.8rem] text-neutral-500 font-medium'>{
                                            notification.description
                                            }</p>
                                        </div>
                                    </div>
                                    )
                                )) : filter === 'unread' && notifications.filter(notification => notification.isRead === false).map((notification, i) => (
                                    (now - notification.timeStamp)  / (1000 * 60 * 60 * 24) >= 7 && (
                                     <div className='flex items-center gap-4' key={i}>
                                        <div className='bg-primary-300 text-white w-fit p-4 rounded-full'>
                                         {
                                             notification.type === 'Reminder' ? <Mail /> : notification.type === 'task Completed' ? <ClipboardCheck /> : <MessageCircleIcon />
                                         }
                                        </div>
                                        <div className='flex flex-col items-start gap-1'>
                                         <h4 className={`text-[1rem] ${
                                            notification.isRead === false ? 'font-bold' : 'font-medium'
                                         }`}>{
                                            notification.title
                                            }</h4>
                                         <p className='text-[0.8rem] text-neutral-500 font-medium'>{
                                            notification.description
                                            }</p>
                                        </div>
                                    </div>
                                    )
                                ))
                                }
                        </div>
                    </div>
                        ) : <div className='flex items-center h-5/6 text-neutral-500 text-[0.8rem] font-medium w-full justify-center'>
                            <p>You haven't received any notification</p>
                        </div>
                    }
        </div>
    </div>
  )
}

export default NotificationModal