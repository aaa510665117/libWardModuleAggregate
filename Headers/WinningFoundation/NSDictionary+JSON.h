//
//  NSDictionary+JSON.h
//  WinningFoundation
//
//  Created by winning on 2019/4/30.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSDictionary (JSON)

- (NSString*)toJSONString;
+ (NSDictionary*)dictionaryWithJSONString: (NSString*)JSONString;

- (NSString *)jsonString: (NSString *)key;

- (NSDictionary *)jsonDict: (NSString *)key;
- (NSArray *)jsonArray: (NSString *)key;
- (NSArray *)jsonStringArray: (NSString *)key;


- (BOOL)jsonBool: (NSString *)key;
- (NSInteger)jsonInteger: (NSString *)key;
- (long long)jsonLongLong: (NSString *)key;
- (unsigned long long)jsonUnsignedLongLong:(NSString *)key;

- (double)jsonDouble: (NSString *)key;

/*
 校验取值部分防止NSNULL
 */
- (NSArray *)ac_arrayForKey:(NSString *)key;
- (NSDictionary *)ac_dictionaryForKey:(NSString *)key;
- (NSString *)ac_stringForKey:(NSString *)key;
- (NSNumber *)ac_numberForKey:(NSString *)key;
- (double)ac_doubleForKey:(NSString *)key;
- (float)ac_floatForKey:(NSString *)key;
- (int)ac_intForKey:(NSString *)key;
- (NSInteger)ac_integerForKey:(NSString *)key;
- (BOOL)ac_boolForKey:(NSString *)key;

@end

NS_ASSUME_NONNULL_END
