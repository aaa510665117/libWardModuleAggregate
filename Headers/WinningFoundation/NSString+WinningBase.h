//
//  NSString+WinningBase.h
//  WinningFoundation
//
//  Created by winning on 2019/5/24.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSString (WinningBase)
/*是否为空字符串*/
+ (BOOL)Winning_isStringNullOrEmpty: (id)string;
/*UUID*/
+ (NSString *)uniqueUUID;
/*是否为空UUID*/
+ (BOOL)isNullEmptyOrEmptyUUIDString: (NSString*)string;
/*查询字符串Key Value为URL参数*/
+ (NSString*)queryStringByAppendingArrayURLQueryValue: (NSArray*)array withKey: (NSString*)key;
/*判断两个字符串是否相同*/
+ (BOOL)isString: (NSString*)string equalToAnotherString: (NSString*)anotherString;
/*数字是否大于零*/
- (NSNumber *)isNumberGreaterThanZero;

/**
 是否包含另一个子字符串

 @param string 子字符串
 @param options 查找方式
 @return 是否包含
 */
- (BOOL)containsString:(NSString *)string options:(NSStringCompareOptions)options;
/*是否包含某个子字符串*/
- (BOOL)containsString:(NSString *)string;
/*url编码*/
- (NSString *)urlencode;
/*url译码*/
- (NSString *)urldecode;
/*md5十六进制转换*/
- (NSString *)md5HexDigest;
/*base64编码*/
- (NSString *)base64encode;
/*base64编码*/
- (NSString *)base64decode;
/*把字典参数追加到字符串后边*/
- (NSString *)stringByAddParams:(NSDictionary *)params;
/*json字符串转换成字典*/
- (NSDictionary *) toDictionary;
/*子字符串出现的次数*/
- (NSUInteger)numberOfOcurrenceOfSubString: (NSString*)subString;
/*字符串有几个换行*/
- (NSInteger)numberOfLines;
/*字符串追加几次换行*/
- (NSString *)appendLineWrap:(NSUInteger)lineWrapCount;
/*处理url，只返回地址*/
- (NSString *)domainFieldUrlString;
/*给手机号加****做隐私保护*/
- (NSString*)maskedMobileNumber;
/*url后面追加参数*/
- (NSString*)stringByAppendingArrayURLQueryValue: (NSArray*)array withKey: (NSString*)key;
/*字符串去除空格*/
- (NSString*)stringByRemovingSpaces;
/*字符串重复处理*/
- (NSString*)stringByRepeating: (NSInteger)times;
/*是否有http前缀*/
- (BOOL)hasHttpPrefix;
/*应用程序支持文件夹路径字符串*/
+ (NSString*)stringForPathOfApplicationSupportFolder;
/*MD5的哈希数据*/
- (NSData*)dataWithMD5Hash;
/*SHA256哈希字符串*/
- (NSString*)hashSHA256;
/*不进行四舍五入转换*/
- (double)doubleValuePrecised;
/*是否为正确的手机号*/
- (BOOL)isValidPhoneNumber;
/* 将十进制字符串转换成interger类型*/
- (NSInteger)integerValueByParseAsDecimalString;
/*移除电话号码的特殊字符串*/
- (NSString*)stringByRemovingPhoneNumberSpecialChars;
/*删除小数点前面所有无效的0*/
- (NSString*)removeSubfixAllZeroDigits;
/*调整字符串的范围*/
- (NSRange)rangeOfStringByTrimmingCharactersNotInSet: (NSCharacterSet*)charset;
/*根据范围返回字符串*/
- (NSString*)stringByTrimmingCharactersNotInSet: (NSCharacterSet*)charset;


@end

NS_ASSUME_NONNULL_END
