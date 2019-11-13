//
//  EnciphermentManager.h
//  MobileClinical
//
//  Created by winning on 2019/2/27.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN
@interface EnciphermentManager : NSObject

+ (EnciphermentManager *)shareManager;

/**
 加密

 @param content 加密秘钥
 @return 加密后的字符串
 */
- (NSString*)aci_encryptAESWith:(NSString *)content;

/**
 解密

 @param encryptStr 解密秘钥
 @return 解密后的字符串
 */
- (NSString*)aci_decryptAESWith:(NSString *)encryptStr;
@end

NS_ASSUME_NONNULL_END
