//
//  NSArray+JSON.h
//  WinningFoundation
//
//  Created by winning on 2019/4/30.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSArray (JSON)

- (NSString*)toJSONString;

+ (NSArray*)arrayWithJSONString: (NSString*)JSONString;

@end

NS_ASSUME_NONNULL_END
