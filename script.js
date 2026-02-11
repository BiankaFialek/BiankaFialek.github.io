// Image data - all sanitized portfolio images
const images = [
    { src: 'images/Capture_One_Catalog64088_compressed.jpg', alt: 'Editorial 1', category: 'fashion' },
    { src: 'images/Capture_One_Catalog64110_compressed.jpg', alt: 'Editorial 2', category: 'fashion' },
    { src: 'images/Capture_One_Catalog64167_compressed.jpg', alt: 'Editorial 3', category: 'fashion' },
    { src: 'images/Capture_One_Catalog64261_compressed.jpg', alt: 'Editorial 4', category: 'fashion' },
    { src: 'images/Capture_One_Catalog64365_compressed.jpg', alt: 'Editorial 5', category: 'fashion' },
    { src: 'images/Capture_One_Catalog64389_compressed.jpg', alt: 'Editorial 6', category: 'fashion' },
    { src: 'images/Capture_One_Catalog64412_1_compressed.jpg', alt: 'Editorial 7', category: 'fashion' },
    { src: 'images/DSC03036_compressed.jpg', alt: 'Fashion 8', category: 'portrait' },
    { src: 'images/DSC03037_compressed.jpg', alt: 'Fashion 9', category: 'portrait' },
    { src: 'images/DSC03042_compressed.jpg', alt: 'Fashion 10', category: 'portrait' },
    { src: 'images/DSC03043_compressed.jpg', alt: 'Fashion 11', category: 'portrait' },
    { src: 'images/DSC03050_compressed.jpg', alt: 'Fashion 12', category: 'portrait' },
    { src: 'images/DSC03051_compressed.jpg', alt: 'Fashion 13', category: 'portrait' },
    { src: 'images/DSC03052_compressed.jpg', alt: 'Fashion 14', category: 'portrait' },
    { src: 'images/DSC03073_compressed.jpg', alt: 'Fashion 15', category: 'portrait' },
    { src: 'images/DSC03135_compressed.jpg', alt: 'Fashion 16', category: 'portrait' },
    { src: 'images/DSCF5916_compressed.jpg', alt: 'Fashion 17', category: 'fashion' },
    { src: 'images/DSCF5926_compressed.jpg', alt: 'Fashion 18', category: 'fashion' },
    { src: 'images/DSCF5951_compressed.jpg', alt: 'Fashion 19', category: 'fashion' },
    { src: 'images/DSCF5969_compressed.jpg', alt: 'Fashion 20', category: 'fashion' },
    { src: 'images/DSCF5998_compressed.jpg', alt: 'Fashion 21', category: 'fashion' },
    { src: 'images/DSCF6045_compressed.jpg', alt: 'Fashion 22', category: 'fashion' },
    { src: 'images/DSCF6071_compressed.jpg', alt: 'Fashion 23', category: 'fashion' },
    { src: 'images/DSCF8435_copy_1_compressed.jpg', alt: 'Fashion 24', category: 'fashion' },
    { src: 'images/DSCF8455_copy_compressed.jpg', alt: 'Fashion 25', category: 'fashion' },
    { src: 'images/DSCF8456_copy_compressed.jpg', alt: 'Fashion 26', category: 'fashion' },
    { src: 'images/DSCF8457_copy_compressed.jpg', alt: 'Fashion 27', category: 'fashion' },
    { src: 'images/DSCF8459_copy_1_compressed.jpg', alt: 'Fashion 28', category: 'fashion' },
    { src: 'images/DSCF8459_copy_compressed.jpg', alt: 'Fashion 29', category: 'fashion' },
    { src: 'images/DSCF8469_copy_compressed.jpg', alt: 'Fashion 30', category: 'fashion' },
    { src: 'images/DSCF8578_copy_compressed.jpg', alt: 'Fashion 31', category: 'fashion' },
    { src: 'images/DSCF8580_copy_compressed.jpg', alt: 'Fashion 32', category: 'fashion' },
    { src: 'images/DSCF8589_copy_compressed.jpg', alt: 'Fashion 33', category: 'fashion' },
    { src: 'images/DSCF8591_copy_compressed.jpg', alt: 'Fashion 34', category: 'fashion' },
    { src: 'images/DSCF8592_copy_compressed.jpg', alt: 'Fashion 35', category: 'fashion' },
    { src: 'images/DSCF8593_copy_compressed.jpg', alt: 'Fashion 36', category: 'fashion' },
    { src: 'images/DSCF8595_copy_compressed.jpg', alt: 'Fashion 37', category: 'fashion' },
    { src: 'images/DSCF8597_copy_compressed.jpg', alt: 'Fashion 38', category: 'fashion' },
    { src: 'images/DSCF8600_copy_compressed.jpg', alt: 'Fashion 39', category: 'fashion' },
    { src: 'images/Foto_15.11.25_15_22_26_compressed.jpg', alt: 'Portfolio 40', category: 'fashion' },
    { src: 'images/IMG-20250701-WA0044_compressed.jpg', alt: 'Summer Editorial 41', category: 'portrait' },
    { src: 'images/IMG-20250701-WA0059_compressed.jpg', alt: 'Summer Editorial 42', category: 'portrait' },
    { src: 'images/IMG-20250702-WA0006_compressed.jpg', alt: 'Summer Editorial 43', category: 'portrait' },
    { src: 'images/IMG-20250702-WA0007_compressed.jpg', alt: 'Summer Editorial 44', category: 'portrait' },
    { src: 'images/IMG-20250702-WA0014_compressed.jpg', alt: 'Summer Editorial 45', category: 'portrait' },
    { src: 'images/IMG-20250704-WA0000_compressed.jpg', alt: 'Summer Editorial 46', category: 'portrait' },
    { src: 'images/IMG-20250714-WA0000_compressed.jpg', alt: 'Summer Editorial 47', category: 'portrait' },
    { src: 'images/IMG-20250829-WA0008_2_compressed.jpg', alt: 'Portfolio 48', category: 'fashion' },
    { src: 'images/IMG-20251007-WA0022_compressed.jpg', alt: 'Studio 49', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0025_compressed.jpg', alt: 'Studio 50', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0031_compressed.jpg', alt: 'Studio 51', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0032_compressed.jpg', alt: 'Studio 52', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0059_compressed.jpg', alt: 'Studio 53', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0070_compressed.jpg', alt: 'Studio 54', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0095_compressed.jpg', alt: 'Studio 55', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0098_compressed.jpg', alt: 'Studio 56', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0114_compressed.jpg', alt: 'Studio 57', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0117_compressed.jpg', alt: 'Studio 58', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0119_compressed.jpg', alt: 'Studio 59', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0121_compressed.jpg', alt: 'Studio 60', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0135_compressed.jpg', alt: 'Studio 61', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0138_compressed.jpg', alt: 'Studio 62', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0140_compressed.jpg', alt: 'Studio 63', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0149_compressed.jpg', alt: 'Studio 64', category: 'portrait' },
    { src: 'images/IMG-20251007-WA0153_compressed.jpg', alt: 'Studio 65', category: 'portrait' },
    { src: 'images/IMG_20250713_134125_452_compressed.jpg', alt: 'Creative 66', category: 'portrait' },
    { src: 'images/IMG_20250713_134127_584_compressed.jpg', alt: 'Creative 67', category: 'portrait' },
    { src: 'images/IMG_20250713_134130_172_compressed.jpg', alt: 'Creative 68', category: 'portrait' },
    { src: 'images/IMG_20250713_134136_473_compressed.jpg', alt: 'Creative 69', category: 'portrait' },
    { src: 'images/IMG_20250713_134138_411_compressed.jpg', alt: 'Creative 70', category: 'portrait' },
    { src: 'images/IMG_20250713_134140_800_compressed.jpg', alt: 'Creative 71', category: 'portrait' },
    { src: 'images/IMG_20250713_134143_320_compressed.jpg', alt: 'Creative 72', category: 'portrait' },
    { src: 'images/IMG_20250921_164830_582_compressed.jpg', alt: 'Lifestyle 73', category: 'metro' },
    { src: 'images/IMG_20250921_164832_300_compressed.jpg', alt: 'Lifestyle 74', category: 'metro' },
    { src: 'images/IMG_20250921_164837_803_compressed.jpg', alt: 'Lifestyle 75', category: 'metro' },
    { src: 'images/IMG_20250921_164839_422_compressed.jpg', alt: 'Lifestyle 76', category: 'metro' },
    { src: 'images/IMG_20250921_164841_280_compressed.jpg', alt: 'Lifestyle 77', category: 'metro' },
    { src: 'images/IMG_20250921_164847_718_compressed.jpg', alt: 'Lifestyle 78', category: 'metro' },
    { src: 'images/IMG_20250921_164851_388_compressed.jpg', alt: 'Lifestyle 79', category: 'metro' },
    { src: 'images/IMG_20250921_164853_388_compressed.jpg', alt: 'Lifestyle 80', category: 'metro' },
    { src: 'images/IMG_20250921_164855_694_compressed.jpg', alt: 'Lifestyle 81', category: 'metro' },
    { src: 'images/IMG_20250921_164858_226_compressed.jpg', alt: 'Lifestyle 82', category: 'metro' },
    { src: 'images/IMG_20251007_100412_304_compressed.jpg', alt: 'Portfolio 83', category: 'portrait' },
    { src: 'images/IMG_20251007_100412_501_compressed.jpg', alt: 'Portfolio 84', category: 'portrait' },
    { src: 'images/IMG_20251007_100412_572_compressed.jpg', alt: 'Portfolio 85', category: 'portrait' },
    { src: 'images/IMG_20251007_100412_623_compressed.jpg', alt: 'Portfolio 86', category: 'portrait' },
    { src: 'images/IMG_20251115_203321_551_compressed.jpg', alt: 'Portfolio 87', category: 'fashion' },
    { src: 'images/IMG_20251203_163231_398_compressed.jpg', alt: 'Portfolio 88', category: 'fashion' },
    { src: 'images/IMG_20251203_163236_873_compressed.jpg', alt: 'Portfolio 89', category: 'fashion' },
    { src: 'images/IMG_20251203_163237_855_compressed.jpg', alt: 'Portfolio 90', category: 'fashion' },
    { src: 'images/IMG_20251204_165827_386_compressed.jpg', alt: 'Portfolio 91', category: 'fashion' },
    { src: 'images/IMG_20251221_122508_002_compressed.jpg', alt: 'Winter 92', category: 'fashion' },
    { src: 'images/IMG_20251221_122514_635_compressed.jpg', alt: 'Winter 93', category: 'fashion' },
    { src: 'images/IMG_20251221_122517_014_compressed.jpg', alt: 'Winter 94', category: 'fashion' },
    { src: 'images/IMG_20251221_122521_325_compressed.jpg', alt: 'Winter 95', category: 'fashion' },
    { src: 'images/IMG_20251221_122522_390_compressed.jpg', alt: 'Winter 96', category: 'fashion' },
    { src: 'images/IMG_20251221_122526_740_compressed.jpg', alt: 'Winter 97', category: 'fashion' },
    { src: 'images/IMG_20251221_122531_229_compressed.jpg', alt: 'Winter 98', category: 'fashion' },
    { src: 'images/IMG_20251221_131508_558_compressed.jpg', alt: 'Winter 99', category: 'fashion' },
    { src: 'images/IMG_20251221_131515_943_compressed.jpg', alt: 'Winter 100', category: 'fashion' },
    { src: 'images/IMG_20251221_131521_235_compressed.jpg', alt: 'Winter 101', category: 'fashion' },
    { src: 'images/IMG_20251221_131525_498_compressed.jpg', alt: 'Winter 102', category: 'fashion' },
    { src: 'images/IMG_20251221_131526_778_compressed.jpg', alt: 'Winter 103', category: 'fashion' },
    { src: 'images/IMG_20251221_131531_379_compressed.jpg', alt: 'Winter 104', category: 'fashion' },
    { src: 'images/IMG_20251221_131535_520_compressed.jpg', alt: 'Winter 105', category: 'fashion' },
    { src: 'images/IMG_20251221_131536_616_compressed.jpg', alt: 'Winter 106', category: 'fashion' },
    { src: 'images/IMG_20251221_131538_106_compressed.jpg', alt: 'Winter 107', category: 'fashion' },
    { src: 'images/IMG_20251221_131541_713_compressed.jpg', alt: 'Winter 108', category: 'fashion' },
    { src: 'images/IMG_20251221_131541_978_compressed.jpg', alt: 'Winter 109', category: 'fashion' },
    { src: 'images/IMG_20251221_131543_141_compressed.jpg', alt: 'Winter 110', category: 'fashion' },
    { src: 'images/IMG_20251221_131544_106_compressed.jpg', alt: 'Winter 111', category: 'fashion' },
    { src: 'images/IMG_20251221_131545_721_compressed.jpg', alt: 'Winter 112', category: 'fashion' },
    { src: 'images/IMG_20251221_131546_753_compressed.jpg', alt: 'Winter 113', category: 'fashion' },
    { src: 'images/IMG_20251221_131547_802_compressed.jpg', alt: 'Winter 114', category: 'fashion' },
    { src: 'images/IMG_20251221_131549_102_compressed.jpg', alt: 'Winter 115', category: 'fashion' },
    { src: 'images/IMG_20251221_131550_183_compressed.jpg', alt: 'Winter 116', category: 'fashion' },
    { src: 'images/IMG_20251221_131552_732_compressed.jpg', alt: 'Winter 117', category: 'fashion' },
    { src: 'images/IMG_20251221_131553_863_compressed.jpg', alt: 'Winter 118', category: 'fashion' },
    { src: 'images/IMG_20251221_131554_993_compressed.jpg', alt: 'Winter 119', category: 'fashion' },
    { src: 'images/IMG_20251221_131556_025_compressed.jpg', alt: 'Winter 120', category: 'fashion' },
    { src: 'images/IMG_20251221_131557_159_compressed.jpg', alt: 'Winter 121', category: 'fashion' },
    { src: 'images/IMG_20251221_131558_188_compressed.jpg', alt: 'Winter 122', category: 'fashion' },
    { src: 'images/IMG_20251221_131559_572_compressed.jpg', alt: 'Winter 123', category: 'fashion' },
    { src: 'images/IMG_20251221_131600_836_compressed.jpg', alt: 'Winter 124', category: 'fashion' },
    { src: 'images/IMG_20251221_131601_785_compressed.jpg', alt: 'Winter 125', category: 'fashion' },
    { src: 'images/IMG_20251221_131615_002_compressed.jpg', alt: 'Winter 126', category: 'fashion' },
    { src: 'images/IMG_20251221_131616_989_compressed.jpg', alt: 'Winter 127', category: 'fashion' },
    { src: 'images/IMG_20251221_131618_064_compressed.jpg', alt: 'Winter 128', category: 'fashion' },
    { src: 'images/IMG_20251221_131621_077_compressed.jpg', alt: 'Winter 129', category: 'fashion' },
    { src: 'images/METRO_MODELS29384_compressed.jpg', alt: 'Metro Models 130', category: 'metro' },
    { src: 'images/METRO_MODELS29463_compressed.jpg', alt: 'Metro Models 131', category: 'metro' },
    { src: 'images/METRO_MODELS29471_compressed.jpg', alt: 'Metro Models 132', category: 'metro' },
    { src: 'images/METRO_MODELS29484_compressed.jpg', alt: 'Metro Models 133', category: 'metro' },
    { src: 'images/METRO_MODELS29487_compressed.jpg', alt: 'Metro Models 134', category: 'metro' },
    { src: 'images/METRO_MODELS29496_compressed.jpg', alt: 'Metro Models 135', category: 'metro' },
    { src: 'images/METRO_MODELS29503_compressed.jpg', alt: 'Metro Models 136', category: 'metro' },
    { src: 'images/METRO_MODELS29538_compressed.jpg', alt: 'Metro Models 137', category: 'metro' },
    { src: 'images/METRO_MODELS29546_compressed.jpg', alt: 'Metro Models 138', category: 'metro' },
    { src: 'images/METRO_MODELS29551_compressed.jpg', alt: 'Metro Models 139', category: 'metro' },
    { src: 'images/METRO_MODELS29580_compressed.jpg', alt: 'Metro Models 140', category: 'metro' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-001_2_compressed.jpg', alt: 'Portrait Session 141', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-001_3_compressed.jpg', alt: 'Portrait Session 142', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-001_compressed.jpg', alt: 'Portrait Session 143', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-002_2_compressed.jpg', alt: 'Portrait Session 144', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-002_3_compressed.jpg', alt: 'Portrait Session 145', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-002_compressed.jpg', alt: 'Portrait Session 146', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-003_compressed.jpg', alt: 'Portrait Session 147', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-004_2_compressed.jpg', alt: 'Portrait Session 148', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-004_compressed.jpg', alt: 'Portrait Session 149', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-005_compressed.jpg', alt: 'Portrait Session 150', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-006_compressed.jpg', alt: 'Portrait Session 151', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-007_compressed.jpg', alt: 'Portrait Session 152', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-008_compressed.jpg', alt: 'Portrait Session 153', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-010_compressed.jpg', alt: 'Portrait Session 154', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-011_compressed.jpg', alt: 'Portrait Session 155', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-012_compressed.jpg', alt: 'Portrait Session 156', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-013_compressed.jpg', alt: 'Portrait Session 157', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-014_compressed.jpg', alt: 'Portrait Session 158', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-015_compressed.jpg', alt: 'Portrait Session 159', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-016_compressed.jpg', alt: 'Portrait Session 160', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-017_compressed.jpg', alt: 'Portrait Session 161', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-018_compressed.jpg', alt: 'Portrait Session 162', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-019_compressed.jpg', alt: 'Portrait Session 163', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-020_compressed.jpg', alt: 'Portrait Session 164', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-021_compressed.jpg', alt: 'Portrait Session 165', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-022_compressed.jpg', alt: 'Portrait Session 166', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-023_compressed.jpg', alt: 'Portrait Session 167', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-024_compressed.jpg', alt: 'Portrait Session 168', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-025_compressed.jpg', alt: 'Portrait Session 169', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-026_compressed.jpg', alt: 'Portrait Session 170', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-027_compressed.jpg', alt: 'Portrait Session 171', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-028_compressed.jpg', alt: 'Portrait Session 172', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-029_compressed.jpg', alt: 'Portrait Session 173', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-030_compressed.jpg', alt: 'Portrait Session 174', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-054_2_compressed.jpg', alt: 'Portrait Session 175', category: 'fashion' },
    { src: 'images/Portrait_Collab_Shoot_15.11.2025-054_compressed.jpg', alt: 'Portrait Session 176', category: 'fashion' },
    { src: 'images/Screenshot_2025-04-22-20-47-10-526_com.instagram.android_compressed.jpg', alt: 'Instagram Post 177', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-17-52-18-921_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 178', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-17-52-30-489_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 179', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-17-52-40-434_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 180', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-17-52-46-287_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 181', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-02-10-214_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 182', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-02-21-402_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 183', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-02-37-240_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 184', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-02-55-717_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 185', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-03-02-278_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 186', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-08-03-641_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 187', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-14-24-691_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 188', category: 'fashion' },
    { src: 'images/Screenshot_2025-05-25-18-14-36-384_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 189', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-49-24-424_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 190', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-49-59-263_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 191', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-50-04-952_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 192', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-50-12-643_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 193', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-50-17-165_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 194', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-50-21-567_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 195', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-50-30-452_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 196', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-50-41-903_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 197', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-51-00-693_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 198', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-51-04-213_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 199', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-51-17-559_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 200', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-51-22-833_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 201', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-51-28-775_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 202', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-52-15-235_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 203', category: 'fashion' },
    { src: 'images/Screenshot_2025-06-07-15-57-28-777_com.google.android.apps.docs_compressed.jpg', alt: 'Feature 204', category: 'fashion' },
    { src: 'images/Screenshot_2025-12-24-13-26-45-167_com.instagram.android_compressed.jpg', alt: 'Instagram Post 205', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-35-42-086_com.instagram.android_2_compressed.jpg', alt: 'Instagram Post 206', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-40-13-314_com.instagram.android_compressed.jpg', alt: 'Instagram Post 207', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-40-25-964_com.instagram.android_compressed.jpg', alt: 'Instagram Post 208', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-41-28-247_com.instagram.android_compressed.jpg', alt: 'Instagram Post 209', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-41-32-341_com.instagram.android_compressed.jpg', alt: 'Instagram Post 210', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-41-40-735_com.instagram.android_compressed.jpg', alt: 'Instagram Post 211', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-41-45-378_com.instagram.android_compressed.jpg', alt: 'Instagram Post 212', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-41-50-188_com.instagram.android_compressed.jpg', alt: 'Instagram Post 213', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-41-54-082_com.instagram.android_compressed.jpg', alt: 'Instagram Post 214', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-04-628_com.instagram.android_compressed.jpg', alt: 'Instagram Post 215', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-09-404_com.instagram.android_compressed.jpg', alt: 'Instagram Post 216', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-14-915_com.instagram.android_compressed.jpg', alt: 'Instagram Post 217', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-21-714_com.instagram.android_compressed.jpg', alt: 'Instagram Post 218', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-25-692_com.instagram.android_compressed.jpg', alt: 'Instagram Post 219', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-50-652_com.instagram.android_compressed.jpg', alt: 'Instagram Post 220', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-42-56-463_com.instagram.android_compressed.jpg', alt: 'Instagram Post 221', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-43-09-925_com.instagram.android_compressed.jpg', alt: 'Instagram Post 222', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-43-21-665_com.instagram.android_compressed.jpg', alt: 'Instagram Post 223', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-43-29-416_com.instagram.android_compressed.jpg', alt: 'Instagram Post 224', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-43-41-905_com.instagram.android_compressed.jpg', alt: 'Instagram Post 225', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-44-04-627_com.instagram.android_compressed.jpg', alt: 'Instagram Post 226', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-44-17-826_com.instagram.android_compressed.jpg', alt: 'Instagram Post 227', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-45-43-744_com.instagram.android_compressed.jpg', alt: 'Instagram Post 228', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-45-59-222_com.instagram.android_compressed.jpg', alt: 'Instagram Post 229', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-46-07-928_com.instagram.android_compressed.jpg', alt: 'Instagram Post 230', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-46-32-391_com.instagram.android_compressed.jpg', alt: 'Instagram Post 231', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-15-48-50-204_com.instagram.android_compressed.jpg', alt: 'Instagram Post 232', category: 'fashion' },
    { src: 'images/Screenshot_2026-02-11-16-18-55-076_com.instagram.android_compressed.jpg', alt: 'Instagram Post 233', category: 'fashion' },
    { src: 'images/WhatsApp_Image_2026-02-09_at_16.07.21_compressed.jpeg', alt: 'Recent Shot 234', category: 'metro' },
    { src: 'images/WhatsApp_Image_2026-02-09_at_16.07.24_compressed.jpeg', alt: 'Recent Shot 235', category: 'metro' },
    { src: 'images/WhatsApp_Image_2026-02-09_at_16.07.25_compressed.jpeg', alt: 'Recent Shot 236', category: 'metro' },
    { src: 'images/WhatsApp_Image_2026-02-09_at_16.08.17_compressed.jpeg', alt: 'Recent Shot 237', category: 'metro' },
    { src: 'images/biankasclbernvol1_iG_compressed.jpg', alt: 'Comp Card', category: 'portrait' },
    { src: 'images/image00001_compressed.jpeg', alt: 'Portfolio 239', category: 'portrait' },
    { src: 'images/image00002_compressed.jpeg', alt: 'Portfolio 240', category: 'portrait' },
    { src: 'images/image00002_compressed.jpg', alt: 'Portfolio 241', category: 'portrait' },
    { src: 'images/image00003_compressed.jpeg', alt: 'Portfolio 242', category: 'portrait' },
    { src: 'images/image00004_compressed.jpeg', alt: 'Portfolio 243', category: 'portrait' },
    { src: 'images/image00005_compressed.jpg', alt: 'Portfolio 244', category: 'portrait' },
    { src: 'images/image00007_compressed.jpeg', alt: 'Portfolio 245', category: 'portrait' },
    { src: 'images/image00008_compressed.jpeg', alt: 'Portfolio 246', category: 'portrait' },
    { src: 'images/image00009_compressed.jpeg', alt: 'Portfolio 247', category: 'portrait' },
    { src: 'images/image00010_compressed.jpeg', alt: 'Portfolio 248', category: 'portrait' },
    { src: 'images/image00011_compressed.jpeg', alt: 'Portfolio 249', category: 'portrait' },
    { src: 'images/image00012_compressed.jpeg', alt: 'Portfolio 250', category: 'portrait' },
    { src: 'images/image00013_compressed.jpeg', alt: 'Portfolio 251', category: 'portrait' },
    { src: 'images/image00013_compressed.jpg', alt: 'Portfolio 252', category: 'portrait' },
    { src: 'images/image00014_compressed.jpeg', alt: 'Portfolio 253', category: 'portrait' },
    { src: 'images/image00014_compressed.jpg', alt: 'Portfolio 254', category: 'portrait' },
    { src: 'images/image00015_compressed.jpeg', alt: 'Portfolio 255', category: 'portrait' },
    { src: 'images/image00016_compressed.jpeg', alt: 'Portfolio 256', category: 'portrait' },
    { src: 'images/image00017_compressed.jpeg', alt: 'Portfolio 257', category: 'portrait' },
    { src: 'images/image00017_compressed.jpg', alt: 'Portfolio 258', category: 'portrait' },
    { src: 'images/image00018_compressed.jpeg', alt: 'Portfolio 259', category: 'portrait' },
    { src: 'images/image00019_compressed.jpeg', alt: 'Portfolio 260', category: 'portrait' },
    { src: 'images/image00020_compressed.jpeg', alt: 'Portfolio 261', category: 'portrait' },
    { src: 'images/image00021_compressed.jpeg', alt: 'Portfolio 262', category: 'portrait' },
    { src: 'images/image00022_compressed.jpeg', alt: 'Portfolio 263', category: 'portrait' },
    { src: 'images/image00023_compressed.jpeg', alt: 'Portfolio 264', category: 'portrait' },
    { src: 'images/image00024_compressed.jpeg', alt: 'Portfolio 265', category: 'portrait' },
    { src: 'images/image00024_compressed.jpg', alt: 'Portfolio 266', category: 'portrait' },
    { src: 'images/image00025_compressed.jpeg', alt: 'Portfolio 267', category: 'portrait' },
    { src: 'images/image00025_compressed.jpg', alt: 'Portfolio 268', category: 'portrait' },
    { src: 'images/image00026_compressed.jpeg', alt: 'Portfolio 269', category: 'portrait' },
    { src: 'images/image00027_compressed.jpeg', alt: 'Portfolio 270', category: 'portrait' },
    { src: 'images/image00028_compressed.jpeg', alt: 'Portfolio 271', category: 'portrait' },
    { src: 'images/image00029_compressed.jpeg', alt: 'Portfolio 272', category: 'portrait' },
    { src: 'images/image00030_compressed.jpeg', alt: 'Portfolio 273', category: 'portrait' },
    { src: 'images/image00030_compressed.jpg', alt: 'Portfolio 274', category: 'portrait' },
    { src: 'images/image00031_compressed.jpeg', alt: 'Portfolio 275', category: 'portrait' },
    { src: 'images/image00032_compressed.jpeg', alt: 'Portfolio 276', category: 'portrait' },
    { src: 'images/image00032_compressed.jpg', alt: 'Portfolio 277', category: 'portrait' },
    { src: 'images/image00033_compressed.jpeg', alt: 'Portfolio 278', category: 'portrait' },
    { src: 'images/image00033_compressed.jpg', alt: 'Portfolio 279', category: 'portrait' },
    { src: 'images/image00034_compressed.jpeg', alt: 'Portfolio 280', category: 'portrait' },
    { src: 'images/image00035_compressed.jpeg', alt: 'Portfolio 281', category: 'portrait' },
    { src: 'images/image00036_compressed.jpeg', alt: 'Portfolio 282', category: 'portrait' },
    { src: 'images/image00036_compressed.jpg', alt: 'Portfolio 283', category: 'portrait' },
    { src: 'images/image00037_compressed.jpeg', alt: 'Portfolio 284', category: 'portrait' },
    { src: 'images/image00038_compressed.jpeg', alt: 'Portfolio 285', category: 'portrait' },
    { src: 'images/image00038_compressed.jpg', alt: 'Portfolio 286', category: 'portrait' },
    { src: 'images/image00039_compressed.jpeg', alt: 'Portfolio 287', category: 'portrait' },
    { src: 'images/image00040_compressed.jpeg', alt: 'Portfolio 288', category: 'portrait' },
    { src: 'images/image00040_compressed.jpg', alt: 'Portfolio 289', category: 'portrait' },
    { src: 'images/image00041_compressed.jpeg', alt: 'Portfolio 290', category: 'portrait' },
    { src: 'images/image00042_compressed.jpeg', alt: 'Portfolio 291', category: 'portrait' },
    { src: 'images/image00043_compressed.jpeg', alt: 'Portfolio 292', category: 'portrait' },
    { src: 'images/image00043_compressed.jpg', alt: 'Portfolio 293', category: 'portrait' },
    { src: 'images/image00044_compressed.jpeg', alt: 'Portfolio 294', category: 'portrait' },
    { src: 'images/image00044_compressed.jpg', alt: 'Portfolio 295', category: 'portrait' },
    { src: 'images/image00045_compressed.jpeg', alt: 'Portfolio 296', category: 'portrait' },
    { src: 'images/image00046_compressed.jpeg', alt: 'Portfolio 297', category: 'portrait' },
    { src: 'images/image00047_compressed.jpeg', alt: 'Portfolio 298', category: 'portrait' },
    { src: 'images/image00048_compressed.jpeg', alt: 'Portfolio 299', category: 'portrait' },
    { src: 'images/image00048_compressed.jpg', alt: 'Portfolio 300', category: 'portrait' },
    { src: 'images/image00049_compressed.jpeg', alt: 'Portfolio 301', category: 'portrait' },
    { src: 'images/image00049_compressed.jpg', alt: 'Portfolio 302', category: 'portrait' },
    { src: 'images/image00050_compressed.jpeg', alt: 'Portfolio 303', category: 'portrait' },
    { src: 'images/image00051_compressed.jpeg', alt: 'Portfolio 304', category: 'portrait' },
    { src: 'images/image00051_compressed.jpg', alt: 'Portfolio 305', category: 'portrait' },
    { src: 'images/image00052_compressed.jpeg', alt: 'Portfolio 306', category: 'portrait' },
    { src: 'images/image00053_compressed.jpeg', alt: 'Portfolio 307', category: 'portrait' },
    { src: 'images/large-1737841090-1d3dec656c549283cd9dd7a9e887f57b_compressed.jpg', alt: 'Professional 308', category: 'portrait' },
    { src: 'images/large-1737841092-c696e67dd4e275dad376595855e3c036_compressed.jpg', alt: 'Professional 309', category: 'portrait' },
    { src: 'images/large-1737841092-d8ee51483b1a2d2e72d9b06eea490668_compressed.jpg', alt: 'Professional 310', category: 'portrait' },
    { src: 'images/large-1737841092-e515cdd41e9c12455663a9a79688041b_compressed.jpg', alt: 'Professional 311', category: 'portrait' },
    { src: 'images/large-1737842532-2151a496dfb08c00f74445e61cf51ddb_compressed.jpg', alt: 'Professional 312', category: 'portrait' },
    { src: 'images/large-1740438201-08ad7d6040c7f1d2a8af7844c1fb78ec_compressed.jpg', alt: 'Professional 313', category: 'portrait' },
    { src: 'images/large-1740438201-d082223a999cf72517b851bc25549259_compressed.jpg', alt: 'Professional 314', category: 'portrait' },
    { src: 'images/large-1740438201-dcd3f6a42b8dc063279ee2a3ebb7274f_compressed.jpg', alt: 'Professional 315', category: 'portrait' },
    { src: 'images/large-1740438202-3002218079a5dadb32748e9c3a92295a_compressed.jpg', alt: 'Professional 316', category: 'portrait' },
    { src: 'images/large-1740438202-32ceeb0d5305358c399a52506f1acf56_compressed.jpg', alt: 'Professional 317', category: 'portrait' },
    { src: 'images/large-1740438202-ce74b983693c46436d638164cedb067d_compressed.jpg', alt: 'Professional 318', category: 'portrait' },
    { src: 'images/large-1740438203-b2b92d3a6f6252d6225cef4dd949194f_compressed.jpg', alt: 'Professional 319', category: 'portrait' },
    { src: 'images/large-1740438203-b8edd436ecb5a04200e07babbc8df6f6_compressed.jpg', alt: 'Professional 320', category: 'portrait' },
    { src: 'images/large-1740438204-4d24608a881204a6216b4eebd194e18e_compressed.jpg', alt: 'Professional 321', category: 'portrait' },
    { src: 'images/large-1740438204-df9b7d9ea182e1fcc3e6b80713c2916b_compressed.jpg', alt: 'Professional 322', category: 'portrait' },
    { src: 'images/large-1740438204-e6daa066088739f21c4b3ce6bf0da3f1_compressed.jpg', alt: 'Professional 323', category: 'portrait' },
    { src: 'images/large-1740438205-918387479668b0854f6de761792ce8db_compressed.jpg', alt: 'Professional 324', category: 'portrait' },
    { src: 'images/large-1745326282-662209e3abe3055d32fe4ddad8eeb537_compressed.jpg', alt: 'Professional 325', category: 'portrait' },
    { src: 'images/large-1745326283-da650af965ed979b40c5547e70194f5c_compressed.jpg', alt: 'Professional 326', category: 'portrait' },
    { src: 'images/large-1745326283-dc6c6d9465dc7d5ebaabb966d78ab86e_compressed.jpg', alt: 'Professional 327', category: 'portrait' },
    { src: 'images/large-1745326284-66a52de172f732b543a9e101e4027f32_compressed.jpg', alt: 'Professional 328', category: 'portrait' },
    { src: 'images/large-1745326284-6bf6d4e7a2e95fbf83de40950d57deb0_compressed.jpg', alt: 'Professional 329', category: 'portrait' },
    { src: 'images/large-1745326284-8c09997e1c471a105894bcd09522f988_compressed.jpg', alt: 'Professional 330', category: 'portrait' },
    { src: 'images/large-1745326552-57b992a617be40978a20b1720b0f4d50_compressed.jpg', alt: 'Professional 331', category: 'portrait' },
    { src: 'images/large-1745326552-b54baaad4b2ba53c5cc029f9eb011306_compressed.jpg', alt: 'Professional 332', category: 'portrait' },
    { src: 'images/large-1762787843-727ea5d08361d46402fd837f4315c805_compressed.jpg', alt: 'Professional 333', category: 'portrait' },
    { src: 'images/large-1762787843-ed07d89e50bab468a12b2c73ccd2c219_compressed.jpg', alt: 'Professional 334', category: 'portrait' },
    { src: 'images/large-1762787844-5ef7601ffdb01be676fbc31d58c78ee2_compressed.jpg', alt: 'Professional 335', category: 'portrait' },
    { src: 'images/large-1762787844-a704ba65b200dfd812837758590ec013_compressed.jpg', alt: 'Professional 336', category: 'portrait' },
    { src: 'images/large-1762787845-3429ed0c3a7f9f0d448e0996bc1e6133_compressed.jpg', alt: 'Professional 337', category: 'portrait' },
    { src: 'images/large-1762787845-597ac63e07b30132b955a0439c44c2c4_compressed.jpg', alt: 'Professional 338', category: 'portrait' },
    { src: 'images/large-1763055700-0e4f0678cd5e6795765be2b2def5473b_2_compressed.jpg', alt: 'Professional 339', category: 'portrait' },
    { src: 'images/large-1763055700-0e4f0678cd5e6795765be2b2def5473b_compressed.jpg', alt: 'Professional 340', category: 'portrait' },
    { src: 'images/large-1763055700-aca1ce9986d3f3ff889011ea08f47b18_compressed.jpg', alt: 'Professional 341', category: 'portrait' },
    { src: 'images/large-1763055701-2cc6f5b495e0c0e2208f0c157d39997d_compressed.jpg', alt: 'Professional 342', category: 'portrait' },
    { src: 'images/large-1763055701-ec1ab177f844b1bc743fcbf3c4452900_2_compressed.jpg', alt: 'Professional 343', category: 'portrait' },
    { src: 'images/large-1763055701-ec1ab177f844b1bc743fcbf3c4452900_compressed.jpg', alt: 'Professional 344', category: 'portrait' },
    { src: 'images/large-1763055702-081e0cb98daba6e5050c904f52be5a08_compressed.jpg', alt: 'Professional 345', category: 'portrait' },
    { src: 'images/large-1763055702-520542acd7f7a0d008c0310dace89397_compressed.jpg', alt: 'Professional 346', category: 'portrait' },
    { src: 'images/large-1763055702-db8d05633304162446590a68d17efa37_compressed.jpg', alt: 'Professional 347', category: 'portrait' },
    { src: 'images/large-1763055703-5d3643b2cdb2b4b581e01a9713071e99_compressed.jpg', alt: 'Professional 348', category: 'portrait' },
    { src: 'images/large-1763055703-a3100ebf3ff44ece32ce6f5bd0f9f0bd_2_compressed.jpg', alt: 'Professional 349', category: 'portrait' },
    { src: 'images/large-1763055703-a3100ebf3ff44ece32ce6f5bd0f9f0bd_compressed.jpg', alt: 'Professional 350', category: 'portrait' },
    { src: 'images/large-1763055704-ea9ee4b0338bc21f28e14b4c4b22259d_2_compressed.jpg', alt: 'Professional 351', category: 'portrait' },
    { src: 'images/large-1763055704-ea9ee4b0338bc21f28e14b4c4b22259d_compressed.jpg', alt: 'Professional 352', category: 'portrait' },
    { src: 'images/large-1763055704-ea9ee4b0338bc21f28e14b4c4b22259d~2_compressed.jpg', alt: 'Professional 353', category: 'portrait' },
];
let currentImageIndex = 0;
let filteredImages = [...images];

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    loadGallery('all');
    setupEventListeners();
});

function loadGallery(filter) {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';

    if (filter === 'all') {
        filteredImages = [...images];
    } else {
        filteredImages = images.filter(img => img.category === filter);
    }

    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="gallery-item-overlay">${image.alt}</div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadGallery(this.getAttribute('data-filter'));
        });
    });

    // Lightbox controls
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', previousImage);
    nextBtn.addEventListener('click', nextImage);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') previousImage();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');

    lightboxImg.src = filteredImages[index].src;
    caption.textContent = filteredImages[index].alt;
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');
    lightboxImg.src = filteredImages[currentImageIndex].src;
    caption.textContent = filteredImages[currentImageIndex].alt;
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.lightbox-caption');
    lightboxImg.src = filteredImages[currentImageIndex].src;
    caption.textContent = filteredImages[currentImageIndex].alt;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
