//
//  NSString+Security.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/2/28.
//  Copyright © 2019年 Ran. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN
@interface NSString (Security)

/**
 MD5加密

 @return 加密字符串
 */
-(NSString*)md5;

/**
 AES加密

 @return 加密字符串
 */
- (NSString*)aci_encryptAES;

/**
 AES解密

 @return 解密字符串
 */
- (NSString*)aci_decryptAES;

@end
NS_ASSUME_NONNULL_END
