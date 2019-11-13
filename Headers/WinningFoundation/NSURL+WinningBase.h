//
//  NSURL+WinningBase.h
//  WinningFoundation
//
//  Created by winning on 2019/5/24.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSURL (WinningBase)
/*url追加参数*/
- (NSURL *)URLByAddParams:(NSDictionary*)params;
/*无？的url字符串*/
- (NSString*)urlStringWithoutQuery;
/*url参数*/
- (NSDictionary *)params;
/*是否是httpURL*/
- (BOOL)isHttpURL;
/*是否为空URL*/
- (BOOL)isNoneHttpURL;
/*去掉url的某个参数*/
- (NSURL*)urlByRemovingParamWithKey: (NSString*)key;
/*无？的url是否相等*/
- (BOOL)isEqualToURLWithoutQuery: (NSURL*)url;

@end

NS_ASSUME_NONNULL_END
