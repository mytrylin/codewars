const categoryList = [
  'Algorithm', 'Codewars', 'LeetCode', 'Codility'
]

export const menuItems = [
  { pageName: 'Home', icon: 'icon-home', url: '/', title: 'Home', category: null},
  //1-5
  {
    title: '[Codewars] Create Phone Number',
    pageName: 'CreatePhoneNumber',
    url: '/CreatePhoneNumber',
    category: categoryList[1],
    icon: 'icon-settings'
  },
  {
    title: '[Algorithm] 反轉字串 (Reverse String)',
    pageName: 'ReverseString',
    url: '/ReverseString',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  {
    title: '[Algorithm] 計算字串中的字元出現次數 (Character Count)',
    pageName: 'CharacterCount',
    url: '/CharacterCount',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  {
    title: '[Algorithm] 陣列去重 (Remove Duplicates from an Array)',
    pageName: 'ArrayRemoveDuplicates',
    url: '/ArrayRemoveDuplicates',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  {
    title: '[Algorithm] 迴文檢查 (Palindrome Check)',
    pageName: 'PalindromeCheck',
    url: '/PalindromeCheck',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  //6-10
  {
    title: '[Algorithm] 陣列的元素之和 (Sum of Array Elements)',
    pageName: 'SumArray',
    url: '/SumArray',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  {
    title: '[Algorithm] 合併兩個已排序的陣列 (merge Sorted Arrays)',
    pageName: 'mergeSortedArrays',
    url: '/mergeSortedArrays',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  {
    title: '[Codility] 字元類型描述函數 (Character type description function)',
    pageName: 'CharacterTypeDescription',
    url: '/CharacterTypeDescription',
    category: categoryList[3],
    icon: 'icon-settings'
  },
  {
    title: '[Algorithm] 隨機陣列排序 (Shuffle Array Sort)',
    pageName: 'ShuffleArraySort',
    url: '/ShuffleArraySort',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  {
    title: '[Algorithm] 群組化物件陣列 (Group Array of Objects by Property)',
    pageName: 'GroupArrayByProperty',
    url: '/GroupArrayByProperty',
    category: categoryList[0],
    icon: 'icon-settings'
  },
  //11
  // {
  //   title: '[Algorithm] 迴文檢查 (Palindrome Check)',
  //   pageName: 'PalindromeCheck',
  //   url: '/PalindromeCheck',
  //   icon: 'icon-settings'
  // },

]
